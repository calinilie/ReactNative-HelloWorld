const React = require('react-native');

const {
    View,
    TouchableHighlight,
    StyleSheet,
} = React;

class MessageComponent extends React.Component{

    render() {
        return (
            <View>
                <TouchableHighlight style={styles.container}>
                    <View style={styles.one}>
                        <View stle={styles.imgContainer}>
                            <Image source={{uri:'http://lorempixel.com/300/300/'}}
                                    style={{width: 300, height: 300}} />
                        </View>
                    </View>
                    <View style={styles.contents}>
                        <Text style={styles.two}>2 minutes ago</Text>
                        <Text style={styles.three}>User 1234</Text>
                        <Text style={styles.four}>Ut clita veritus definiebas mea, per te debet dicunt molestie. Ex altera incorrupte has, sint vivendo ei cum. In modo scripta dissentiunt mei. Ius et prodesset efficiantur. Vis cu nonumes denique scaevola.</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{

    },
    one:{
        order: 0,
        marging: '30px 10px',
    },
    imgContainer: {
        borderRadius: '150px',
        width: '300px',
        height: '300px',
    },
    contents:{
        flexDirection: 'column',
        justifyContent: 'center',
    },
    two:{
        order: 1,
        fontSize: '15px',
        color: 'gray',
        fontStyle: 'italic',
    },
    three:{
        order: 2,
        fontSize: '30px',
    },
    four:{
        order: 3,
        fontSize: '20px',
    },
});

module.exports = MessageComponent;
