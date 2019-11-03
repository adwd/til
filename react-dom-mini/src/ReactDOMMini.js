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
    ['className', 'src'].forEach(k => {
      if (props[k]) el[k] = props[k];
    });

    return el;
  },

  createTextInstance(
    text: string,
    rootContainerInstance: Container,
    hostContext: HostContext,
    internalInstanceHandle: Object,
  ): TextInstance {
    // <div> Hello :) </div>
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

  prepareUpdate(
    domElement: Instance,
    type: string,
    oldProps: Props,
    newProps: Props,
    rootContainerInstance: Container,
    hostContext: HostContext,
  ): null | Array<mixed> { },

  commitUpdate(
    domElement: Instance,
    updatePayload: Array<mixed>,
    type: string,
    oldProps: Props,
    newProps: Props,
    internalInstanceHandle: Object,
  ): void { },

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
  render(whatToRender: any, div: any) {
    const container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(whatToRender, container, null, null);
  },
};

export default ReactDOMMini;
