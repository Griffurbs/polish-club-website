function Social(props) {
    return (
        <div className={props.className}>
            <a href={props.link}><img src={"./social/" + props.imgName}/></a>
        </div>
    );
}

export default Social;