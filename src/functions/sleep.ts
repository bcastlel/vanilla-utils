const sleep = (mseconds: number): Promise<void> => new Promise(resolve => setTimeout(resolve, mseconds));

export default sleep;
