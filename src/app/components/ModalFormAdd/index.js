import React, { memo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Modal, TextInput, Button } from 'react-native';

import { addNew } from '../../actions/actionsListPay';
import colorBase from '../../styles/colorBase';
import styles from './styles';

const ModalFormAdd = ({ onClose, modalVisible }) => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		title: '',
		price: '',
		id: null,
		date: null,
	});

	useEffect(() => {
		setFormData({
			...formData,
			id: Number(new Date()),
			date: new Date().toLocaleDateString('en-GB'),
		});

		return () =>
			setFormData({
				title: '',
				price: 0,
				id: null,
				date: null,
			});
	}, [formData.title, formData.price]);

	const handleSubmit = () => {
		if (formData.title !== '' && formData.price !== '') {
			dispatch(addNew(formData));
			setFormData({
				title: '',
				price: 0,
				id: null,
				date: null,
			});
			onClose();
		}
	};

	return (
		<Modal animationType="fade" transparent={true} visible={modalVisible}>
			<View style={styles.modalAdd}>
				<View style={styles.formAdd}>
					<TextInput
						style={styles.input}
						placeholder="Nhập tiêu đề"
						onChangeText={text =>
							setFormData({ ...formData, title: text })
						}
						defaultValue={formData.title}
					/>
					<TextInput
						style={styles.input}
						placeholder="Nhập số tiền"
						onChangeText={text =>
							setFormData({
								...formData,
								price: Number(text),
							})
						}
						keyboardType="numeric"
						defaultValue={formData.price.toString()}
					/>
					<View style={styles.groupBtn}>
						<Button
							title="Đóng"
							color={colorBase.secondary}
							onPress={onClose}
						/>
						<Button title="Thêm mới" onPress={handleSubmit} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default memo(ModalFormAdd);
