class SwitchMenu extends CustomEvent<{ menu: string }> {
	constructor({ menu }: { menu: string }) {
		super(SwitchMenu.name, {
			detail: { menu },
			bubbles: true,
			composed: true,
		});
	}
}

export { SwitchMenu };
