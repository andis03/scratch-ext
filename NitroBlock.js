class  NitroBlock  { 
    getInfo ()  { 
        return  { 
            "id" :  "NitroBlock" , 
            "name" :  "NitroBlock" , 
            "blocks" :  [{ 
                    "opcode" :  "substringy" , 
                    "blockType" :  "reporter" , 
                    "text" :  "letras [num1] a [num2] de [string]" , 
                    "argumentos" :  { 
                        "num1" :  { 
                            "tipo" :  "número" ,
                            "defaultValue" :  "2" 
                        }, 
                        "num2" : { 
                            "type" :  "number" , 
                            "defaultValue" :  "5" 
                        }, 
                        "string" :  { 
                            "type" :  "string" , 
                            "defaultValue" :  "hello world" 
                        } 
                    } 
                }, 
            }], 
        "menus" :  {  // voltaremos a isso em um tutorial posterior 
        } 
    }; 
    substringy ({ num1 ,  num2 ,  string })  { 
        string de retorno  .   
    };
}
