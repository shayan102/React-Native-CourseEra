import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';


function RenderDish(props) {
    const dish = props.dish;

    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}
            >
                <Text >
                    {dish.description}
                </Text>

            </Card>
        );
    }
    else {
        return (
            <View></View>
        )
    }
}

function DishDetail(props) {
    return (
        <RenderDish dish={props.dish} />
    )
}

export default DishDetail;