{

// type assertion: ami jei type set korbo oitai hobe typescript er cheye beshi buji.  


let anything : any;

anything = 'next level web development';

(anything as string)


// ---

const kgToGm = (value: string | number) => {
    if(typeof value === 'string' ){
        const convertedValue = parseFloat(value)  * 1000;
        return `the converted value is ${convertedValue}`
    }
    if(typeof value === 'number'){
      const convertedValue = value  * 1000;
      return convertedValue;
    }

}

// tmi as a type jeta set korba tmk ondho bisshash korbe typescript er kotha shunbe na.
const result1 = kgToGm(1000) as number  
const result2 = kgToGm('1000') as string 


type CustomError = {
    message:string
}


try{

}catch(error){
console.log((error as CustomError).message);
}

}