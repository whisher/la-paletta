import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { CheckoutError } from './checkout-error';
const CheckoutForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});
	const isValidMail = (current: 'required' | 'pattern') => {
		const label = errors.email && errors.email.type;

		return String(label) === current;
	};
	//console.log(errors.email);
	const classes = `block w-full rounded-md border-gray-300 shadow focus:border-brand-400/50 focus:ring focus:ring-brand-400/50 focus:ring-opacity-50`;
	return (
		<form onSubmit={onSubmit} noValidate>
			<div className="flex items-center gap-6">
				<div className="w-1/2">
					<label className="block">
						<span className="text-black/80 pb-0.5">Nome</span>
						<input className={classes} type="text" {...register('firstname', { required: true })} />
					</label>
					{errors.firstname && <CheckoutError>Il nome è obbligatorio.</CheckoutError>}
				</div>
				<div className="w-1/2">
					<label className="block">
						<span className="text-black/80 pb-0.5">Cognome</span>
						<input className={classes} type="text" {...register('lastname', { required: true })} />
					</label>
					{errors.lastname && <CheckoutError>Il cognome è obbligatorio.</CheckoutError>}
				</div>
			</div>
			<label className="block mt-2">
				<span className="text-black/80">Email</span>
				<input
					className={classes}
					type="email"
					{...register('email', { required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/ })}
				/>
			</label>
			{isValidMail('required') && <CheckoutError>La mail è obbligatoria.</CheckoutError>}
			{isValidMail('pattern') && <CheckoutError>Mail non valida.</CheckoutError>}
			<label className="block mt-2">
				<span className="text-black/80">Indirizzo</span>
				<input className={classes} type="text" {...register('address', { required: true })} />
			</label>
			{errors.address && <CheckoutError>L&#39;indirizzo è obbligatorio.</CheckoutError>}
			<div className="flex items-center gap-6 mt-2">
				<div className="w-5/12">
					<label className="block">
						<span className="text-black/80 pb-0.5">Provincia</span>
						<input className={classes} type="text" {...register('district', { required: true })} />
					</label>
					{errors.district && <CheckoutError>La provincia è obbligatoria.</CheckoutError>}
				</div>
				<div className="w-5/12">
					<label className="block">
						<span className="text-black/80 pb-0.5">Città</span>
						<input className={classes} type="text" {...register('city', { required: true })} />
					</label>
					{errors.city && <CheckoutError>La città è obbligatoria.</CheckoutError>}
				</div>
				<div className="w-2/12">
					<label className="block">
						<span className="text-black/80 pb-0.5">Cap</span>
						<input className={classes} type="text" {...register('pcode', { required: true })} />
					</label>
					{errors.pcode && <CheckoutError>Il cap è obbligatorio.</CheckoutError>}
				</div>
			</div>
			<label className="flex items-center mt-2">
				<input
					type="checkbox"
					className="rounded border-gray-300
                          text-brand-black/80
                          shadow
                          focus:border-brand-400/50
                          focus:ring
                          focus:ring-offset-0
                          focus:ring-brand-400
                          focus:ring-opacity-50
                        "
					{...register('account')}
				/>
				<span className="ml-2 text-black/80">Creare un account?</span>
			</label>
			<Button type="submit">Ordina</Button>
		</form>
	);
};

export { CheckoutForm };
