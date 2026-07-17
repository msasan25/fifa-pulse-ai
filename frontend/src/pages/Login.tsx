import { login } from "../auth";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const handleLogin = async () => {

        try {

            const user = await login();

            localStorage.setItem("userName", user.displayName ?? "");
            localStorage.setItem("userEmail", user.email ?? "");
            localStorage.setItem("userPhoto", user.photoURL ?? "");

            navigate("/dashboard");

        } catch (err) {

            console.error(err);

            alert("Login failed");

        }

    };

    return (

        <main className="flex min-h-screen items-center justify-center bg-slate-100">

            <div className="rounded-2xl bg-white p-10 shadow-xl focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:ring-offset-2">

                <h1 className="mb-6 text-3xl font-bold">
                    FIFA Pulse AI
                </h1>

                <p className="mb-6 text-slate-500">
                    Sign in to access operational tools.
                </p>

                <button
                    onClick={handleLogin}
                    className="w-full rounded-xl bg-slate-900 py-3 text-white"
                >
                    Continue with Google
                </button>

            </div>

        </main>

    );

}