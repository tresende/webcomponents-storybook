export const getElementAttributes = (nodeMap: NamedNodeMap) => {
  if (nodeMap) {
    const length = nodeMap.length
    return Object.keys(nodeMap).reduce((props, current) => {
      try {
        const numCurrent = parseInt(current)
        if (numCurrent < length) {
          const property = nodeMap[current]
          return {
            ...props,
            disabled: true,
            [property.name]: property.value ? property.value : true
          }
        }
      } catch (err) {
        console.warn(err)
      }
    }, {})
  }
  return {}
}
