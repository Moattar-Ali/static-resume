function toggleSection(sectionId: string):void {
let section = document.getElementById(sectionId);
if(section){
    section.classList.toggle('hidden')
}
}