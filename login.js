const fs = require('fs');
let re = new RegExp();
const r=require("readline-sync")
const path="./kal/file.json";
var File_Exit=(fs.existsSync(path))
if (File_Exit==false){
    dic1={}
    list3=[]
    user=r.question("signup or login")
    if (user==="signup"){
        fullname=r.question("enter user fullname")
        p=/^[S/s]{8,32}$/, upper=/[A-Z]/,lower=/[a-z]/,number=/[0-9]/,sp=/[!@@#%%^&*?]/
        console.log("your password length should be between 8-18")
        pas=r.question("creat a strong password")
        if (p.test(pas),upper.test(pas),lower.test(pas),number.test(pas),sp.test(pas)){
            pas2=r.question("confirm password")
            if (pas==pas2){
                console.log("congrats ",fullname,"you have succesfully signup")
                dob=r.question("enter your date of birth in form of - 00/00/1900__  ")
                descr=r.question("description  ")
                hobbies=r.question("hobbies  ")
                gender=r.question("gender  male of female   ")
                console.log("congrats ",fullname,"you have succesfully signup")
                list1=["fullname","pas2","dob","descr","hobbies","gender"]
                list2=[fullname,pas2,dob,descr,hobbies,gender]
                var i=0
                var dic1={}
                while (i<list1.length){
                    dic1[list1[i]]=list2[i]
                    i+=1
                }
                dic2={}
                list4=[]

                list4.push("\n".dic1)
                dic2[pas]=list4
                var jsons = JSON.stringify(dic2);
                var b = jsons.replace(/\\n/g, "\\n")
                fs.writeFileSync('kal/file.json',b) 
            }
            else{
                console.log("both password are not same")}
            }
        else{
            console.log("your password is not strong,try again") }
    }
}
else if (File_Exit==true){
        list3=[]
        user=r.question("signup or login")
        if (user=="signup"){
            fullname=r.question("enter user fullname")
            console.log("your password length should be between 8-18")
            p=/^[S/s]{8,32}$/, upper=/[A-Z]/,lower=/[a-z]/,number=/[0-9]/,sp=/[!@#%%^&*?]/
            pas=r.question("creat a strong password")
            d=fs.readFileSync("kal/file.json","utf-8");
            const data=JSON.parse(d)
            if (p.test(pas),upper.test(pas),lower.test(pas), sp.test(pas),number.test(pas)){
                pas2=r.question("conform password")
                if (pas===pas2){
                    console.log("your password is correct")
                    dob=r.question("enter your date of birth in form of - 00/00/1900__  ")
                    descr=r.question("description  ")
                    hobbies=r.question("hobbies  ")
                    gender=r.question("gender male of female")
                    console.log("congrats ",fullname,"you have succesfully signup")
                    list1=["name","pas2","dob","descr","hobbies","gender"]
                    list2=[fullname,pas2,dob,descr,hobbies,gender]
                    i=0
                    dic1={}
                    while (i <list2.length){
                        dic1[list1[i]]=list2[i]
                        i+=1
                    }
                    list4=[]
                    list4.push(dic1)
                    data[pas]=list4
                    var jsons = JSON.stringify(data);
                    var b=jsons.replace(/\\n/g, "\\n")
                    fs.writeFileSync('kal/file.json',b )
                    

                }else{
                        console.log("both password are not same")
                    }
            }else{
                    console.log("your password is not strong,try again") 
            }
        }else if (user=="login"){
            user_name=r.question("enter user name")
            password=r.question("enter password")
            d=fs.readFileSync('kal/file.json',"utf-8")
            const data=JSON.parse(d)
                if (d.includes(password && user_name)){
                    console.log("user is true")
                }
                else{
                    console.log("sorry your password is wrong please signup")
                }
    }}
