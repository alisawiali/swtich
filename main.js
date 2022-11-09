let cars =['BMW', 'Mercedes' ,'Honda'];
let models =[2020,2021, 2023];
let farbe =['white', 'black' ,'red'];

for(let i =0 ; i < cars.length ;i++)
{
   console.log(`Car: ${cars[i]}`);

   for(let m =0; m < models.length; m++)
   { console.log(`models: ${models[m]}`);}

    for(let f =0; f <farbe.length;f++)
   {     console.log(`farbe: ${farbe[f]}`);}
   console.log('---------')
}
