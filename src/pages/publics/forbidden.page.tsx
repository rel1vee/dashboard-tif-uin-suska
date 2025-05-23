import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Lock, PanelLeftCloseIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForbiddenPage = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate("/");
	};

	return (
		<div className="min-h-screen flex items-center justify-center p-6">
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="max-w-md w-full flex justify-center bg-background items-center flex-col rounded-2xl shadow-2xl border p-8 text-center transform transition-all hover:shadow-3xl"
			>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: "spring", stiffness: 260, damping: 20 }}
					className="mb-6 flex justify-center"
				>
					<div className="bg-secondary p-5 rounded-full backdrop-blur-sm">
						<Lock
							className="h-20 w-20 text-destructive drop-shadow-md"
							strokeWidth={1.2}
						/>
					</div>
				</motion.div>
				<h1 className="text-4xl font-extrabold mb-2 text-destructive tracking-tight">
					Akses Ditolak
				</h1>
				<p className="text-foreground mb-6 text-base leading-relaxed">
					Maaf, anda tidak memiliki akses ke halaman ini.
				</p>
				<Button
					variant={"destructive"}
					onClick={handleGoBack}
					className="flex active:scale-105 hover:scale-95 py-4 items-center justify-center gap-2 font-bold transition duration-300 shadow-md hover:shadow-lg"
				>
					<PanelLeftCloseIcon />
                    Kembali ke Beranda
				</Button>
			</motion.div>
		</div>
	);
};

export default ForbiddenPage;
