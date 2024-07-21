const buildAutoreload = () => {
    let i = 0;

    const import2 = async (path: string) => {
        const module = await import(`${path}#${i++}`);
        return module;
    };

    return import2;
};

const import2 = buildAutoreload();

export { import2 };
