class SwitchPage extends CustomEvent<{ page: number }> {
	constructor({ page }: { page: number }) {
		super(SwitchPage.name, {
			detail: { page },
			bubbles: true,
			composed: true,
		});
	}
}

export { SwitchPage };
