import React, { useEffect, useState } from 'react';

export default function ProfileStatusHooks(props) {
	let [status, setStatus] = useState(props.status);
	let [editMode, setEditMode] = useState(false);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	let activateEditMode = () => {
		setEditMode(true);
	};
	let deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};
	let onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};

	return (
		<div>
			{!editMode && (
				<div>
					<span onDoubleClick={activateEditMode}>
						{props.status || '----'}{' '}
					</span>
				</div>
			)}
			{editMode && (
				<div>
					<input
						onChange={onStatusChange}
						autoFocus={true}
						onBlur={deactivateEditMode}
						value={status}
					/>
				</div>
			)}
		</div>
	);
}
