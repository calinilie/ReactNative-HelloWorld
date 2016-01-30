const Message = require('./MessageComponent');
const React = require('react-native');
const {
    View,
    Text,
    ListView,
    RecyclerViewBackedScrollView,
} = React;

class MessageListComponent extends React.Component {

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let rows = [];
        for (let i = 0; i < 1000; i++) {
            rows.push(i * 10);
        }

        this.state = {
            dataSource: ds.cloneWithRows(rows),
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={() => <Message />}
                showsVerticalScrollIndicator={true}
            />
        );
    }
}

module.exports = MessageListComponent;
