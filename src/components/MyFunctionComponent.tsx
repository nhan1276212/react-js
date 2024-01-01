import React from "react";

const MyFunctionComponent = (props: any) => {
    const { name, age, jobs } = props;
    return(
        <>
            <h1>function Component {name} and {age}</h1>
            <div className="jobs">
                {
                    jobs.map((item: any, index: number) => {
                        return <div key={index}>{item.name} - {item.sl}</div>
                    })
                }
            </div>
        </>
    )
}

export default MyFunctionComponent