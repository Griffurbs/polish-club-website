function Social(props) {
    return (
        <a href={props.link}><img src={"./" + props.imgName} className={props.className}/></a>
    );
}

export default Social;