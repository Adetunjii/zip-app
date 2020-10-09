import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";

class FundWallet extends Component {
  render() {
    return (
      <ScrollView style={{ padding: 30 }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "500", color: "#000237" }}>
            FUND WALLET
          </Text>
        </View>

        <View style={{ marginVertical: 30 }}>
          <Text style={{ fontSize: 15, fontWeight: "normal" }}>
            Payment Method
          </Text>
          <View></View>
        </View>
      </ScrollView>
    );
  }
}

export default FundWallet;

// const CheckBox = (props: any) => {
//     <TouchableHighlight
//     // onPress={this.stateSwitcher.bind(this, this.props.keyValue, this.props.label, this.props.value)}
//     onPress={() => console.log('touched')}
//     underlayColor="transparent"
//     style={{ marginVertical: 20 }}>

//     <View style={{
//       flexDirection: 'row',
//       alignItems: 'center' }}>
//         <View style={{
//           padding: 4,
//           width: props.size,
//           height: props.size,
//           backgroundColor: props.color
//         }}>
//           {
//             (this.state.checked)
//               ?
//               (<View style={styles.selectedUI}>
//                 <Image source={require('./assets/tick.png')} style={styles.checkboxTickImg} />
//               </View>)
//               :
//               (<View style={styles.uncheckedCheckbox} />)
//           }
//       </View>
//       <Text style={[styles.checkboxLabel, { color: this.props.labelColor }]}>
//         {this.props.label}
//       </Text>
//     </View>

//   </TouchableHighlight>
// }
