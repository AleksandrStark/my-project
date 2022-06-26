import React from 'react';
import classes from './Paginator.module.css';

let Paginator = ({ currentPage, totalUsersCount, pageSize, onPageChanged }) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<div>
			<div>
				{pages.map((p) => {
					return (
						<span
							onClick={(e) => {
								onPageChanged(p);
							}}
							className={currentPage === p ? classes.selectedPage : undefined}
						>
							{p}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default Paginator;
