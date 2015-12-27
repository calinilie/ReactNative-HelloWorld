const React = require('react-native');

const {
    View,
    TouchableHighlight,
    StyleSheet,
    Image,
    Text,
    PixelRatio,
} = React;

class MessageComponent extends React.Component{

    render() {
        return (
            <View>
                <TouchableHighlight>
                    <View style={styles.container}>
                        <View style={styles.one}>
                            <Image source={{uri:'http://lorempixel.com/50/50/'}}
                                    style={styles.img} />
                        </View>
                        <View style={styles.contents}>
                            <Text style={styles.two}>2 minutes ago</Text>
                            <Text style={styles.three}>User 1234</Text>
                            <Text style={styles.four}>Ut clita veritus definiebas mea, per te debet dicunt molestie. Ex altera incorrupte has, sint vivendo ei cum. In modo scripta dissentiunt mei. Ius et prodesset efficiantur. Vis cu nonumes denique scaevola.</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:10,
        marginRight:10,
        margin:5,
        flexDirection:'row',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        backgroundColor:'white',
    },
    one:{
        flex: 25,
        margin: 10,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    contents:{
        margin:5,
        marginLeft: 20,
        flex:75,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    two:{
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
        color: 'gray',
        fontStyle: 'italic',
    },
    three:{
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6.5),
        marginTop:7,
        marginBottom: 5,
    },
    four:{
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
        marginBottom:5,
    },
});

module.exports = MessageComponent;
