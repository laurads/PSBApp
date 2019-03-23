import React from 'react';
import { Text} from 'react-native';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'react-native-elements';

class HeaderButtonGroup extends React.Component {
    
    static propTypes = {
        leftTitle: PropTypes.string.isRequired,
        rightTitle: PropTypes.string.isRequired,
    }

    constructor () {
        super()
        this.state = {
            selectedIndex: 0
        }
        this.changeScreen = this.changeScreen.bind(this)
    }
        
    changeScreen (selectedIndex) {
    this.setState({selectedIndex})
    this.props.callbackFunction(selectedIndex);
    }
    
    render () {
        const component1 = () => <Text>{this.props.leftTitle}</Text>
        const component2 = () => <Text>{this.props.rightTitle}</Text>
        const buttons = [{ element: component1 }, { element: component2 }]
        const { selectedIndex } = this.state
        return (
            <ButtonGroup
                onPress={this.changeScreen}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 25, width: 300}}
                selectedBackgroundColor="green"
                selectedTextStyle={{color: 'white'}}
                containerBorderRadius={6}
          />
        )
        }
        
    }

    
export default HeaderButtonGroup

