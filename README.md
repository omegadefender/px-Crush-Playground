# H1 PXcrush Playground

This is a demo site where you can take an image url and see what happens when you manipulate it with PXcrush.

## Query String Notes

All query strings can use pxc_ at the start

See param type in Pixel
px_job.py 
line 47 for query string params
line 227 for size param settings

size
either size=int,int or size=s:float
 
format 
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
line 337https://wuoty1uqpw7y-stg.pxcrush.net/animal-animal-photography-elephant-1772706.jpg?pxc_size=300,300&pxc_method=fitfill&pxc_bgcolor=ff6347

bgalpha
line 347

