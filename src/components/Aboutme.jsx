import { Briefcase, Book, User,Laptop } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Dedicated Mathematics Teacher & Academic Mentor
            </h3>

            <p className="text-muted-foreground text-justify">
              I am a dedicated Mathematics Teacher with experience teaching students from Grades 6–12.
               I focus on making mathematical concepts simple, clear, and easy to understand through structured 
               lessons and real-life examples.
            </p>

            <p className="text-muted-foreground text-justify">
              With a student-centered approach, I design engaging activities, worksheets,
               and assessments that support different learning styles and help students strengthen their problem-solving skills.
            </p>
            <p className="text-muted-foreground text-justify">
              I incorporate modern digital tools and interactive teaching methods to create an effective and enjoyable learning environment.
               My goal is to help students build confidence, think logically, and develop a genuine interest in mathematics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Mathematics Instruction (Grades 6–12)</h4>
                  <p className="text-muted-foreground">
                    Teach algebra, geometry, trigonometry, calculus, statistics,
                     and advanced mathematical concepts with clarity and structure.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Student-Centered & Differentiated Learning</h4>
                  <p className="text-muted-foreground">
                   Provide individualized support and design activities
                    that meet the needs of different learning levels
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Curriculum Planning & Student Support</h4>
                  <p className="text-muted-foreground">
                    Prepare lesson plans, learning materials, 
                    doubt-clearing sessions, and exam-oriented preparation for students.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Technology-Enhanced Teaching</h4>
                  <p className="text-muted-foreground">
                    Use smart classroom tools, digital platforms, and interactive resources to make mathematics
                     engaging and conceptually strong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};