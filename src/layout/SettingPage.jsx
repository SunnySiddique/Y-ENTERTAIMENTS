import { Code, Smartphone } from "lucide-react";
import React from "react";
import { THEMES } from "../constants";
import { useTheme } from "../context/ThemeContext";

const SettingPage = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <div className="text-sm text-base-content/70">
            Choose a theme for your chat interface
          </div>
        </div>
        <div className=" grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t.id}
              className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
              ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}`}
              onClick={() => changeTheme(t)}
            >
              <div
                className="relative h-8 w-full rounded-md overflow-hidden"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <div className=" w-full max-w-2xl mx-auto p-4">
          <h3 className="text-2xl font-semibold mb-4">Preview</h3>

          <div className=" bg-primary/10 rounded-lg shadow-lg p-6">
            <div className="pb-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium text-xl">
                  Y
                </div>
                <div>
                  <h3 className="font-medium">Y-ENTERTAINMENT</h3>
                  <p className="text-sm text-muted-foreground">
                    Innovating Your Future
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm">
                We provide high-quality solutions that help businesses thrive in
                the digital world. Our expertise lies in web development, mobile
                apps, and more.
              </p>

              <div>
                <h4 className="text-lg font-semibold mb-3">Our Services</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className={`bg-primary/10 rounded-lg p-4`}>
                    <div className="w-8 h-8 mb-2 text-primary">
                      <Code />
                    </div>
                    <h5 className="font-medium mb-1">Web Development</h5>
                    <p className="text-sm text-muted-foreground">
                      Responsive and scalable websites
                    </p>
                  </div>
                  <div className={`bg-primary/10 rounded-lg p-4`}>
                    <div className="w-8 h-8 mb-2 text-primary">
                      <Smartphone />
                    </div>
                    <h5 className="font-medium mb-1">Mobile Apps</h5>
                    <p className="text-sm text-muted-foreground">
                      Engaging mobile experiences
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Why Choose Us</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Experienced team of professionals</li>
                  <li>Cutting-edge technologies</li>
                  <li>Tailored solutions for your business</li>
                  <li>Excellent customer support</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-primary text-primary-content py-2 px-4 rounded-lg shadow-md">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
