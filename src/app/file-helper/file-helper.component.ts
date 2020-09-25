import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject, BehaviorSubject, from, of } from 'rxjs'
import { catchError, filter, map, mergeMap, scan, shareReplay, tap, toArray, switchMap, takeWhile } from 'rxjs/operators'
import {UploadedFile} from './uploaded-file';
import { ElectronService } from 'ngx-electron';
import { LikeableService } from '../providers/likeable.service'

@Component({
  selector: 'app-file-helper',
  templateUrl: './file-helper.component.html',
  styleUrls: ['./file-helper.component.css']
})
export class FileHelperComponent implements OnInit {
  title = 'Kitten Booty';
  private filePaths = [];
  private filesReady = true
  public numFiles = 0
  public currentFileDone = 0
  public loading = false;
  public message: string;

  constructor(public electronService: ElectronService, public likeableService: LikeableService) {}
  @Input()
  get fileCount() {
    return (this.filePaths.length || 0)
  }

  get filesAreReady(){
    return this.filesReady;
  }

  handleFileInput(f): void {
  // handleFileInput(f): Observable<UploadedFile[]>{
  // filter(fi => JSON.parse(fi)['type'] === 'image/jpeg'),
    this.filePaths = [];
    var fullList = from(f as File[])
    .pipe(
      filter(fi => fi.type === 'image/jpeg'),
      map(fi => fi.path),
      tap(fi => console.log(fi))
    )
    fullList.subscribe(f => this.filePaths.push(f));
    this.updateMessage()
    this.convertFiles(this.filePaths);
  }

  convertFiles(fi_paths: string[] ): void {
    this.currentFileDone = 0;
    console.log(fi_paths);
    console.log(this.electronService)
    this.numFiles = fi_paths.length;
    this.electronService.ipcRenderer.send('send-files-to-python', fi_paths);
    this.electronService.ipcRenderer.on('conversion-progress', (event,counter) => {
      console.log(event);
      console.log(counter);
      this.updateCounter(counter);
    });
  }

  get isLoading(){
    return this.currentFileDone < this.numFiles;
  }

  updateCounter(counter: number){
    this.currentFileDone = counter;
    console.log("Current Index: "+ this.currentFileDone)
    console.log(this.progressNum)
  }

  updateMessage(){
    this.message = this.likeableService.getMessage()
  }

  get totalNumFiles(){
    return this.numFiles;
  }

  get progressNum(){
    return this.currentFileDone;
  }

  get likeableMessage(){
    return this.message
  }

  ngOnInit(): void {}

}
