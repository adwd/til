import ReactReconciler from 'react-reconciler';

let reconciler = ReactReconciler({
  supportsMutation: true,

  createInstance(
    type: string,
    props: Props,
    rootContainerInstance: Container,
    hostContext: HostContext,
    internalInstanceHandle: Object,
  ): Instance {
    const el = document.createElement(type);
    ['alt', 'className', 'href', 'rel', 'src', 'target'].forEach(k => {
      if (props[k]) el[k] = props[k];
    });

    if (props.onClick) {
      el.addEventListener('click', props.onClick);
    }

    if (props.myBackGroundColor) {
      el.style.backgroundColor = props.myBackGroundColor;
    }

    return el;
  },

  createTextInstance(
    text: string,
    rootContainerInstance: Container,
    hostContext: HostContext,
    internalInstanceHandle: Object,
  ): TextInstance {
    return document.createTextNode(text);
  },

  appendChildToContainer(
    container: DOMContainer,
    child: Instance | TextInstance,
  ): void {
    container.appendChild(child);
  },

  appendChild(
    parentInstance: Instance,
    child: Instance | TextInstance,
  ): void {
    parentInstance.appendChild(child);
  },

  appendInitialChild(
    parentInstance: Instance,
    child: Instance | TextInstance,
  ): void {
    parentInstance.appendChild(child);
  },

  removeChild(
    parentInstance: Instance,
    child: Instance | TextInstance | SuspenseInstance,
  ): void {
    parentInstance.removeChild(child);
  },

  removeChildFromContainer(
    container: Container,
    child: Instance | TextInstance | SuspenseInstance,
  ): void {
    container.removeChild(child);
  },

  insertInContainerBefore(
    container: Container,
    child: Instance | TextInstance,
    beforeChild: Instance | TextInstance | SuspenseInstance,
  ): void {
    container.insertBefore(child, beforeChild);
  },

  insertBefore(
    parentInstance: Instance,
    child: Instance | TextInstance,
    beforeChild: Instance | TextInstance | SuspenseInstance,
  ): void {
    parentInstance.insertBefore(child, beforeChild);
  },

  prepareUpdate(
    domElement: Instance,
    type: string,
    oldProps: Props,
    newProps: Props,
    rootContainerInstance: Container,
    hostContext: HostContext,
  ): null | Array<mixed> {
    let payload;
    if (oldProps.myBackGroundColor !== newProps.myBackGroundColor) {
      payload = { newMyBackGroundColor: newProps.myBackGroundColor };
    }

    return payload;
  },

  commitUpdate(
    domElement: Instance,
    updatePayload: Array<mixed>,
    type: string,
    oldProps: Props,
    newProps: Props,
    internalInstanceHandle: Object,
  ): void {
    if (updatePayload.newMyBackGroundColor) {
      domElement.style.backgroundColor = updatePayload.newMyBackGroundColor;
    }
  },

  finalizeInitialChildren(
    domElement: Instance,
    type: string,
    props: Props,
    rootContainerInstance: Container,
    hostContext: HostContext,
  ): boolean { },

  getChildHostContext(
    parentHostContext: HostContext,
    type: string,
    rootContainerInstance: Container,
  ): HostContext { },

  getPublicInstance(instance: Instance): * { },

  getRootHostContext(
    rootContainerInstance: Container,
  ): HostContext { },

  prepareForCommit(containerInfo: Container): void { },
  resetAfterCommit(containerInfo: Container): void { },
  shouldSetTextContent(type: string, props: Props): boolean { return false },
});

let ReactDOMMini = {
  render(whatToRender, div) {
    const container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(whatToRender, container, null, null);
  },
};

export default ReactDOMMini;
