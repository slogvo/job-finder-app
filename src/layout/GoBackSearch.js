import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/colors/colors'

const GoBackFilter = ({ navigation }) => {
	const [active, setActive] = useState(false);
	return (
		<View style={{ flex: 1, backgroundColor: "#f7f7f7", paddingHorizontal: 25, }}>
			<View style={{
				width: "100%",
				paddingBottom: 10,
				backgroundColor: "#f7f7f7",
				position: "relative",
				flexDirection: 'row',
				alignItems: 'center',
				// borderBottomWidth: 1,
				// borderBottomColor: "#e2e2e2",
				justifyContent: 'space-between'
			}}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
				>
					<Image
						source={require('../../assets/images/close.png')}
						style={{
							width: 21,
							height: 21,
							resizeMode: "contain",
						}} />
				</TouchableOpacity>
				<Image
					source={require('../../assets/images/search-symbol.png')}
					style={{
						position: "absolute",
						width: 20,
						height: 20,
						left: 60,
						zIndex: 10,
						top: 16,
					}} />
				<TextInput
					style={{
						paddingVertical: 12,
						paddingHorizontal: 15,
						paddingLeft: 50,
						borderRadius: 8,
						marginLeft: 20,
						width: '88%',
						color: colors.text,
						backgroundColor: "#FFF",
						fontSize: 15,
					}}
					placeholder="Nhập từ khóa tìm kiếm"
				/>
			</View>

			{/* advanced filter */}

			<View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'space-between' }}>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}>
					<View style={{
						backgroundColor: colors.primary,
						width: 40,
						height: 40,
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: 8,
						marginRight: 10,
					}}>
						<Image
							source={require('../../assets/images/filter.png')}
							style={{
								width: 30,
								height: 30,
								zIndex: 100,
							}} />
					</View>
					<View style={{
						paddingHorizontal: 10,
						height: 40,
						backgroundColor: colors.border,
						borderRadius: 6,
						alignItems: "center",
						justifyContent: 'center',
						marginRight: 10,
					}}>
						<Text style={{ color: colors.text }}>Full Time</Text>
					</View>
					<View style={{
						paddingHorizontal: 10,
						height: 40,
						backgroundColor: colors.border,
						borderRadius: 6,
						alignItems: "center",
						justifyContent: 'center',
						marginRight: 10,
					}}>
						<Text style={{ color: colors.text }}>Part Time</Text>
					</View>
					<View style={{
						paddingHorizontal: 10,
						height: 40,
						backgroundColor: colors.border,
						borderRadius: 6,
						alignItems: "center",
						justifyContent: 'center',
						marginRight: 10,
					}}>
						<Text style={{ color: colors.text }}>Design</Text>
					</View>
					<View style={{
						paddingHorizontal: 10,
						height: 40,
						backgroundColor: colors.border,
						borderRadius: 6,
						alignItems: "center",
						justifyContent: 'center',
						marginRight: 10,
					}}>
						<Text style={{ color: colors.text }}>IT</Text>
					</View>

					<View style={{
						paddingHorizontal: 10,
						height: 40,
						backgroundColor: colors.border,
						borderRadius: 6,
						alignItems: "center",
						justifyContent: 'center',
						marginRight: 10,
					}}>
						<Text style={{ color: colors.text }}>Business</Text>
					</View>

					<View style={{
						paddingHorizontal: 10,
						height: 40,
						backgroundColor: colors.border,
						borderRadius: 6,
						alignItems: "center",
						justifyContent: 'center',
						marginRight: 10,
					}}>
						<Text style={{ color: colors.text }}>Remote</Text>
					</View>
				</ScrollView>
			</View>
		</View>
	)
}

export default GoBackFilter