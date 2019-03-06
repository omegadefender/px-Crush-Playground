# PXcrush Playground

This is a demo site where you can manipulate images with sliders and buttons, in order to get the query string.

## Query String Notes

See px_job.py in Pixel. That file has the code related to query string construction. 

The beginning of the query string starts with ?
All query strings must use pxc_ at the start eg. pxc_width=200 
use & to bind multiple queries together

Line 47 for query string params

Size
Line 227 for size param settings
either size=int,int or size=s:float
 
Format 
line 278
changes format of image

quality
line 298
Quality is either 50 or 90.... difference is applied when image is downloaded.

method
line 312
fit', 'fitfill', 'limit', 'limitfill', 'crop', 'trim', 'gravity', 'gravityfill', 'gravityshow' 

bgtype
line 328

bgcolor
line 337 https://wuoty1uqpw7y-stg.pxcrush.net/animal-animal-photography-elephant-1772706.jpg?pxc_size=300,300&pxc_method=fitfill&pxc_bgcolor=ff6347

bgalpha
line 347

