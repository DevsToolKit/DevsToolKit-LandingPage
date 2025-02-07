import { FaGithub } from "react-icons/fa"; // Import GitHub icon

function Page() {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center text-white font-sans px-4  poppins-regular">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-xl">
        <h1 className="text-5xl text-white font-extrabold mb-4">PixelShift</h1>
        <p className="text-lg text-gray-300">
          PixelShift is an innovative developer tool designed to streamline your
          workflow with powerful features for web development.
        </p>
      </div>

      {/* Contribute Section */}
      <div className="text-center mb-12">
        <p className="text-xl text-gray-300 mb-4">
          Want to contribute? Check out our GitHub:
        </p>
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-xl text-gray-300 hover:text-white transition duration-300"
        >
          <FaGithub className="mr-2 text-3xl" />
          <span>Contribute on GitHub</span>
        </a>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-xl text-left px-4 mb-12">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-lg text-gray-300">
          <div>
            <p className="font-semibold">What is PixelShift?</p>
            <p className="text-[14px]">
              PixelShift is a powerful tool designed to improve your web
              development experience by offering multi-pane views and
              customizable layout options for seamless workflow management.
            </p>
          </div>
          <div>
            <p className="font-semibold">How can I contribute?</p>
            <p className="text-[14px]">
              We welcome contributions! You can help by reporting bugs,
              suggesting new features, or contributing code. Visit our GitHub to
              get started.
            </p>
          </div>
          <div>
            <p className="font-semibold">When will PixelShift be available?</p>
            <p className="text-[14px]">
              PixelShift is currently in development. Stay tuned for future
              updates on our GitHub repository.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-4 text-sm text-gray-400">
        <p>© 2025 PixelShift, All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Page;
