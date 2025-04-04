
import * as Dialog from '@radix-ui/react-dialog'
// import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./ModalRadix.module.css";
import {ReactNode} from "react";

type Props={
	open: boolean
	onClose?: () => void
	title: string
	children: ReactNode
	description: string
}

 export const ModalRadix = ({open, title, children, onClose, description}:Props ) => (
	<Dialog.Root open={open} onOpenChange={onClose}>
		<Dialog.Portal>
			<Dialog.Overlay className={styles.Overlay} />
			<Dialog.Content className={styles.Content}>
				<Dialog.Title className={styles.Title}>{title}</Dialog.Title>
				<hr/>
				<Dialog.Description className={styles.Description}>
					{description}
				</Dialog.Description>
				{children}
				<Dialog.Close asChild>
					<button onClick={onClose} className={styles.IconButton} aria-label="Close">
						X
					</button>
				</Dialog.Close>

			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);


