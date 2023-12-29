function customRender(reactElement, container){
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    element.setAttribute('href', reactElement.props.href);
    element.setAttribute('target', reactElement.props.target);
    container.appendChild(element);
}

const reactElement = {
    type : 'a',
    props:{
        href: 'https://reactjs.org/',
        target: '_blank',
    },
    children: 'React',
}


const mainContainer = document.querySelector('#root');


customRender(reactElement, mainContainer);