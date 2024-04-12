const handlerBarsContext = {
    "/index.html": {
        navh: [
            {
                "hrf": "",
                "page": ""
            },

        ],
    }
}

const pageContext = (page) => {
    const context = { ...handlerBarsContext[page] }
    return context;
}
export default pageContext;