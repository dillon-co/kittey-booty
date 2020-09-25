from PIL import Image
import sys
import os

files = sys.argv
# print(files)
# main_dir = "/".join(files[-2].split('/')[0:-1])
# png_dir = main_dir+'/png_images/'
# print("\n\nFiles are")
# print(files)
# try:
png_dir = False
for file_path in files:
    if file_path.split('.')[-1].lower() == 'jpg':
        if not png_dir:
            png_dir = "/".join(file_path.split('/')[0:-1])+'/png_images/'
            if not os.path.exists(png_dir):
                os.mkdir(png_dir)


        image_name = file_path.split('/')[-1].split('.jpg')[0]
        im1 = Image.open(file_path)
        im1.save(png_dir+image_name+'.png')
        print "Image "+image_name+" converted"

# except:
#     print("Unexpected error:", sys.exc_info()[0])
#     sys.stderr.write(sys.exc_info()[0])
#
