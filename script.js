function addNewWEField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'Enter here');
    newNode.setAttribute('rows',3);

    let workAddBtn=document.getElementById('workAddBtn');
    let workExperience=document.getElementById("workExperience");
    workExperience.insertBefore(newNode,workAddBtn)


}
function addNewAQField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'Enter here');
    newNode.setAttribute('rows',3);

    let acadamicQualificationAddBtn=document.getElementById('acadamicQualificationAddBtn');
    let academicQualification=document.getElementById("academicQualification");
    academicQualification.insertBefore(newNode,acadamicQualificationAddBtn)


}

function generateCV() {
    let nameField=document.getElementById('nameField').value;
    let nameTemplate1=document.getElementById('nameTemplate1');
    nameTemplate1.innerHTML=nameField;

    document.getElementById('nameTemp2').innerHTML=nameField;

    document.getElementById('contactTemplate').innerHTML=document.getElementById('contactField').value;

    document.getElementById('adressTemplate').innerHTML=document.getElementById('addressField').value;

    document.getElementById('fbTemp').innerHTML=document.getElementById('fbField').value;

    document.getElementById('instaTemp').innerHTML=document.getElementById('instaField').value;

    document.getElementById('linkedInTemp').innerHTML=document.getElementById('linkedinField').value;

    document.getElementById('objectiveTemp').innerHTML=document.getElementById('ObjectiveField').value;

    let weFields=document.getElementsByClassName('weField');
    let str = ""
    for(let e of weFields){
        str= str+ `<li> ${e.value} </li>`
    }

    document.getElementById('weTemp').innerHTML=str;

    let aqFields=document.getElementsByClassName('aqField');
    let str1 = ""
    for(let e of aqFields){
        str1= str1+ `<li> ${e.value} </li>`
    }

    document.getElementById('aqTemp').innerHTML=str1;

    let file=document.getElementById('imgField').files[0]
    console.log(file)

    let reader=new FileReader()

    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=function() {
        document.getElementById('imgTemplate').src=reader.result;
    }
    

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cvTemplate').style.display='block';



}
function printCV() {
    window.print();
}
    