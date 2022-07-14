const components: any = import.meta.globEager('./**/*.ts');
let componentsList: any = [];
Object.keys(components).forEach(key => {
    const name = components[key].name;
    componentsList.push(components[key][name]);

})
export default componentsList;
