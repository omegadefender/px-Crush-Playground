# PXcrush Playground

This is a demo site where you can manipulate images with sliders and buttons, in order to get the query string.

## Query String Notes

See px_job.py in Pixel. That file has the code related to query string construction. 

The beginning of the query string starts with `?`  
All query strings must use `pxc_` at the start eg. `pxc_width=200`   
Use `&` to bind multiple queries together

Line 47 for query string params

Size - see line 227  
either size=int,int or size=s:float
 
Format see line 278  
changes format of image

Quality see line 298   
Quality between 50 and 90.... difference is applied when image is downloaded.

Method see line 312  
fit', 'fitfill', 'limit', 'limitfill', 'crop', 'trim', 'gravity', 'gravityfill', 'gravityshow' 

bgtype see line 328  

bgcolor see line 337  
https://wuoty1uqpw7y-stg.pxcrush.net/animal-animal-photography-elephant-1772706.jpg?pxc_size=300,300&pxc_method=fitfill&pxc_bgcolor=ff6347

bgalpha see line 347  

