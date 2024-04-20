import Task from "../Task/Task";

const Scale = () => {

    const scaleItems = (noOfItems) => {
        let arr = [];
        for(let i = 0; i < noOfItems + 1; i++){
            const item = (
            <div className="text-[0.5rem] grow">
                {i}
            </div>);
            arr.push(item);
        }
        return arr;
    }


  return (
    <>
      <div className="bg-rose-600 w-[100%] h-[3rem] absolute bottom-0 flex flex-row justify-stretch">
        {scaleItems(23)}
      </div>
    </>
  );
};

export default Scale;
