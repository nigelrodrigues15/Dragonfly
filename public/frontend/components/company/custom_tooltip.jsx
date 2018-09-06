import React from "react";

class CustomToolTip extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        const price = document.getElementById("price");
        const ogPrice = document.getElementById("ogprice");
        if (this.props.active) {
            if (
                nextProps.payload &&
                nextProps.payload[0] &&
                nextProps.payload[0].payload
            ) {
                price.innerHTML = '$' + parseFloat(nextProps.payload[0].payload["y"]).toFixed(2);
            }
        } else {
            price.innerHTML = ogPrice.innerHTML;
        }
    }

    render() {
        return null;
    }
}

export default CustomToolTip;