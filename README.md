# PXcrush Playground

This is a demo site where you can manipulate images with sliders and buttons, in order to get the query string.

## How to install and run

1. Clone repo from github
2. Run `npm install` in repo folder. This will install dependancies
2. Run `npm start` and the app will run on `http://localhost:3000`

## Query String Notes

See px_job.py in Pixel. That file has the code related to query string construction.  
Line 47 for query string params 

The beginning of the query string starts with `?`  
All query strings must use `pxc_` at the start eg. `pxc_width=200`   
Use `&` to bind multiple queries together

Width and Height - see line 211  
Use `pxc_width=200` for width and `pxc_height=300` to set these params.  

Size - see line 227  
Either `size=int,int` or `size=s:float`  
 
Format - see line 278  
Changes format of image to `'auto', 'jpeg', 'webp', 'png', 'gif'`

Quality - see line 298   
Quality between `50 and 90`.... difference is applied when image is downloaded.

Method - see line 312  
Options are `'fit', 'fitfill', 'limit', 'limitfill', 'crop', 'trim', 'gravity', 'gravityfill', 'gravityshow'`  

bgtype - see line 328  
Options are `pxc_bgtype=color'` and  `pxc_bgtype=self`

bgcolor - see line 337  
Is in hex format without the # eg. `pxc_bgcolor=ff6347`  

bgalpha - see line 347  
Is in a range from `0-100`  