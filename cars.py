!pip install -Uqq fastai
from fastai.vision.all import *

URLs.CARS
carsPath = untar_data(URLs.FOOD)
get_image_files(carsPath)
img = PILImage.create('/root/.fastai/data/food-101/images/ramen/3645906.jpg')
img.show()
pd.read_json('/root/.fastai/data/food-101/train.json')

labelA = "samosa"
labelB = "churros"

for img in get_image_files(carsPath):
  if labelA in str(img):
    img.rename(f"{img.parent}/{labelA}_{img.name}")
  elif labelB in str(img):
    img.rename(f"{img.parent}/{labelB}_{img.name}")
  else: os.remove(img)
len(get_image_files(carsPath))
def GetLabel(fileName):
  return fileName.split('_')[0]

dls = ImageDataLoaders.from_name_func(
    carsPath, get_image_files(carsPath), valid_pct=0.2, seed=420, label_func=GetLabel, item_tfms=Resize(224))
dls.valid.show_batch()

learn = cnn_learner(dls, resnet34, metrics=error_rate, pretrained=True)
learn.fine_tune(epochs=10)