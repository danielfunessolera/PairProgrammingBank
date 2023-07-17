import React, { useEffect, useState } from "react";
import { AppLayout } from "../layout/AppLayout";
import { Card, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import fetchAccount from "../services/accountFetch";
import deleteAccount from "../services/deleteAccount";
import Input from "../components/Input";
import { FormButton } from "../components";
import createBankAccount from "../services/createBankAccount";

const BankAccount = () => {
	const [formState, setFormState] = useState({});
	const [account, setAccount] = useState([]);
	const [enableCreateAccount, setEnableCreateAccount] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setAccount(await fetchAccount(localStorage.getItem("id")));
			} catch (error) {
				console.error(error.message);
			}
		};
		fetchData();
	}, []);

	const handleInputChange = ({ target }) => {
		const { name, value } = target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleDelete = (id) => {

		const deleteFn = async () => {
			try {
				deleteAccount(localStorage.getItem("id"), id);
			} catch (error) {
				console.error(error.message);
			}

			setAccount(account.filter((acc) => acc.id !== id));
		};
		deleteFn(id);
	};

	const handleCreateAccount = () => {
		validateAccount() && //console.log({ validAccount: formState });
			createBankAccount(localStorage.getItem("id"), formState);
	};

	const validateAccount = () => {
		const { accountName, bankName, initialAmount } = formState;

		if (!accountName) return false;
		if (!bankName) return false;
		if (initialAmount < 100) return false;

		return true;
	};

	return (
		<AppLayout>
			<Card sx={{ p: 4, m: 6 }}>
				<Grid
					container
					direcion="row"
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<h2 style={{ fontSize: "20px", color: "#1976d2" }}>Bank Accounts</h2>
					{
						enableCreateAccount
							? <Button
								sx={{ backgroundColor: "#AD0000", "&:hover": { backgroundColor: "#DA0000" } }}
								variant="contained"
								onClick={() => setEnableCreateAccount(true)}
							>
								CANCEL
							</Button>
							: <Button
								variant="contained"
								onClick={() => setEnableCreateAccount(true)}
							>
								CREATE
							</Button>
					}
				</Grid>

				{enableCreateAccount && (
					<Grid container gap={3}>
						<Grid item>
							<Input
								type="text"
								label={"Account Name"}
								name={"accountName"}
								onChange={handleInputChange}
								value={formState.accountName}
							/>
						</Grid>
						<Grid item>
							<Input
								type="text"
								label={"Bank Name"}
								name={"bankName"}
								onChange={handleInputChange}
								value={formState.bankName}
							/>
						</Grid>
						<Grid item>
							<Input
								type="number"
								label={"Initial Amount"}
								name={"initialAmount"}
								onChange={handleInputChange}
								value={formState.initialAmount}
							/>
						</Grid>
						<Grid item sx={{ pt: 1 }}>
							<FormButton
								type="submit"
								onClick={handleCreateAccount}
								text={"Create Bank Account"}
							/>
						</Grid>
					</Grid>
				)}

				{account <= 0
					? "No Bank Accounts yet"
					: account.map((acc, i) => {
						return (
							<Grid
								container
								direcion="row"
								justifyContent={"space-between"}
								padding={1}
								alignItems={"center"}
								key={i}
							>
								<p style={{ fontSize: "20px", color: "#1976d2" }}>
									{acc.bankName + "-" + acc.accountName}
								</p>
								<Button
									onClick={() => handleDelete(acc.id)}
									variant="contained"
									sx={{
										backgroundColor: "white",
										color: "black",
										"&:hover": {
											backgroundColor: "white",
										},
									}}
								>
									DELETE
								</Button>
							</Grid>
						);
					})}
				{ }
			</Card>
		</AppLayout>
	);
};

export default BankAccount;
