import fs from 'fs'
import imageType from 'image-type';

type converterType = {
    image_media_type:string;
    image_data:string;
}

export const converter = async(imagePath:string):Promise<converterType> =>{
   // Read the image file as a Buffer
   const imageBuffer = fs.readFileSync(imagePath);

   const type =await imageType(imageBuffer);

   if (!type) {
       throw new Error('Unsupported image format or invalid image file');
   }
   // Convert the image buffer to a base64 string
   const base64String = imageBuffer.toString('base64');

   return {
    image_media_type: type.mime,
    image_data: base64String
   };
}