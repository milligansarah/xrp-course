import CourseData from "./Types/CourseDataType"
import ActionType from "./Types/ActionTypeEnum";
import format_raw_processed_data_to_course_data from "./format_raw_data_to_course_data";

const generated_data: CourseData = format_raw_processed_data_to_course_data();

const data: CourseData = {
  'Lesson 1 - Getting Started': {
    'totalParagraphs': 50,
    'Introduction': {
      0: {
        actionType: ActionType.Read,
        content: <p>Welcome to learning programming with the XRP robot! In this course, you’ll learn how to program robots for fun or for competition, and how to write software, which you’ll be able to do for robots, and for other uses as well. This course assumes no prior experience of writing software. If you have some prior experience and know the basics, you will still find value in this course as it relates to programming robots and the XRP in particular. If you’re familiar with FIRST Robotics and want to learn how to program robots that compete in FIRST competitions, this is the perfect course for you. By the time you finish this course you’ll have built up skills to contribute to any team you’re a part of and created a foundation for yourself for future learning, leading you on a path to becoming an expert software developer. In this first lesson, we’ll focus on setting up the XRP and making it move.</p>
      },
      1: {
        actionType: ActionType.Read,
        content: <p><strong>Setting up your robot and getting the first program to run can be the most frustrating part of programming.</strong> Unfortunately, there is no way around this. But, if you follow the steps here, you will succeed, and you’ll be driving by the end of this lesson. If something fails the first time you try it, don’t give up – once you make it through this lesson, the succeeding lessons will be more interactive and fun. Also note that although this lesson seems long by page count, most of the pages are filled up with  images, so it will be faster than you might think.</p>
      }
    },
    'Necessary Materials': {
      2: {
        actionType: ActionType.Read,
        content: <p>To complete this course, you’ll need the following things...</p>
      },
      3: {
        actionType: ActionType.Read,
        content: <p><strong>A XRP robot</strong> (of course)</p>
      },
      4: {
        actionType: ActionType.Read,
        content: <p><strong>The data USB cable that comes with the XRP kit.</strong> It’s important to use this specific cable, as some USB cables are for power only and will NOT work. </p>
      },
      5: {
        actionType: ActionType.Read,
        content: <p><strong>One or more joysticks/controllers for driving the robot.</strong> This course uses a gamepad-style controller (such as an Xbox controller, Logitech F310, or similar) for the examples, but you can use any controller recognized by your computer, as long as it has at least two joystick axes. The course explains how to account for differences in controllers, although there are some instances where driving may feel uncomfortable if you only have a single joystick.</p>
      },
      6: {
        actionType: ActionType.Read,
        content: <p><strong>A supply of AA batteries.</strong> You will likely want rechargeable batteries because you will go through a lot of batteries in this course, and it will be expensive and wasteful if you can’t recharge them. The XRP uses two batteries at once and a full charge will last up to a few hours under normal use where you spend more time writing code than driving but can run out faster than that if you spend a lot of time driving. The XRP comes with two batteries, so you can get started on the first couple lesson with those batteries while waiting for a rechargeable kit to kit to arrive, if you purchase a kit online.</p>
      },
      7: {
        actionType: ActionType.Read,
        content: <p><strong>A computer with wireless internet access.</strong> If you have a computer without wireless access, you can buy a wireless adapter for less than $20. You need wireless internet to connect to the XRP to deploy code and drive.</p>
      },
      8: {
        actionType: ActionType.Read,
        content: <p><strong>An internet connection.</strong> In addition to connecting to the XRP, this course has links to external materials you’ll need to access. In this lesson, you’ll need to download two files which are each about a gigabyte, which can take a few minutes on slower connections. These are the only large  downloads in the course.</p>
      },
    },
    'Setting Up Your XRP': {
      9: {
        actionType: ActionType.Read,
        content: <p>There are two main steps in getting started, both of which are explained in detail below: installing VSCode with the WPILib library, and installing firmware onto your XRP. If you know that one or both of these steps have been done for you already, you can skip that step accordingly. If you aren’t sure, then do not skip the step.</p>
      }
    },
    'Turning your XRP On and Off': {
      10: {
        actionType: ActionType.Robot,
        image: <img src='./images/lesson1_12.png' />,
        content: <p>The XRP has a single power switch, as shown in the image below (sourced from <a href="https://docs.wpilib.org/en/stable/docs/xrp-robot/hardware-and-imaging.html">WPILib</a>). To turn it on, you simply have to flip the switch to the “on” position and flip it to the "off" position to turn it off. Remember to turn off your XRP when you're not using it to avoid draining the batteries.</p>
      },
    },
    // TODO: Find an alternate video tutorial
    'Video Tutorial': {
      11: {
        actionType: ActionType.Read,
        content: <p>[Note: The video below is not for the XRP. The video will be corrected during the spring/summer of 2024] If you prefer videos over text instruction, you can follow this link to see a video of how to set up a XRP. If you prefer to follow a list of steps, or are unclear about any part of the video, you can follow the text steps outlined below. Video: <a href='https://www.youtube.com/watch?v=mop51tpWWcA' target='_blank'>https://www.youtube.com/watch?v=mop51tpWWcA</a></p>
      }
    },
    'Step 1 – Installing VSCode and the WPILib': {
      12: {
        actionType: ActionType.Read,
        content: <p>Programming the XRP is done using a library known as “WPILib”. WPILib is built into an installation of an application called “VSCode”, which is what you will use to write and deploy code to the XRP. There is documentation for the WPILib which includes guides on how to get started. To begin, follow the guide linked in the next screen to download VSCode. Note that the VSCode download and the XRP images are about 1-2 gigabytes each and may take a few minutes to download.</p>
      },
      13: {
        actionType: ActionType.Code,
        content: <p>1. Start by opening this link: <a href='https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html' target='_blank'>https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html</a> You’ll be using Java.</p>
      },
      14: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson1_17.png' />,
        content: <p>2. There will be a link to GitHub which you need to follow:</p>
      },
      15: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson1_18.png' />,
        content: <p>3. Once on GitHub, the actual downloads are at the bottom of the page; you’ll need to select the proper one based on which operating system you’re using (Windows, Mac, or Linux) and whether your system is 32-bit or 64-bit. You don’t need to read any of the other text on this page, you just need to find the right download. If you’re on Windows and unsure which one to download, look at sub-point on the next screen.</p>
      },
      16: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson1_19.png' />,
        content: <p>On a Windows computer, if you are unsure of whether it’s 32- or 64-bit, press the Windows key (or click on the start menu), type “This PC” or “Computer”, and click the “Properties” link that appears in the search menu. Then, in the “System” section, look at the “System type” field, which will tell you if your system is 32- or 64-bit.</p>
      },
      17: {
        actionType: ActionType.Code,
        content: <p>4. Once you have the right file downloaded from GitHub, go back to the WPILib documentation using the same link as before: <a href='https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html'>https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html</a></p>
      },
      18: {
        actionType: ActionType.Code,
        content: <p>5. In the documentation, follow all the steps on the page, starting with the “Extracting the Installer” step. There are images to guide you. If you are unsure what options to choose at any point through the setup, follow the default recommendations that the documentation gives you. If you’re unsure about “Install for this User” or “Install for all Users”, you can choose “Install for this User”.</p>
      },
      19: {
        actionType: ActionType.Read,
        content: <p>6. Partway through the page you’ll notice a green warning similar to the one pictured below. If this is your first time installing VSCode, you probably don’t need to worry about this warning  too much, but if for any reason you have a version of VSCode installed your computer already, pay attention to this. Only the new version that you’re installing will work – any prior installation will NOT work, even if it was done for a robotics team.</p>
      },
      20: {
        actionType: ActionType.Read,
        content: <p>7. Make sure to read through the page thoroughly while you follow the steps. It is easy to make a mistake, but if you do follow the steps exactly, it will work. If it does not work, you can attempt to backtrack and see what step you missed. Starting over from scratch can sometimes be an easier option as well.</p>
      }
    },
    'Step 2 – Setting Up Your XRP': {
      21: {
        actionType: ActionType.Read,
        content: <p>To set up your XRP, you need to download and install firmware on it. You can think of firmware as kind of like an operating system for the XRP. It needs to have firmware installed in order to execute the programs that you write. There are a lot of details in the documentation during this section, but you don’t need to read all of them. Follow the steps listed here to successfully install the firmware and configure your robot for use.</p>
      },
      22: {
        actionType: ActionType.Code,
        content: <p>1. Start by following this link: <a href='https://docs.wpilib.org/en/stable/docs/xrp-robot/index.html' target='_blank'>https://docs.wpilib.org/en/stable/docs/xrp-robot/index.html</a> You don’t actually need to read the information on this page, but keep this link as a reference because if you want to do more advanced things with the XRP after reading through this course, you can refer back to it.</p>
      },
      23: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson1_26.png' />,
        content: <p>2. On the page linked above, click the “Next” button in the bottom-right corner.</p>
      },
      24: {
        actionType: ActionType.Robot,
        content: <p>3. You’ll now be on a page describing how to assemble the XRP. If your XRP is not assembled, follow all the steps here. If your XRP came pre-assembled, you can immediately scroll to the  bottom and click next.</p>
      },
      25: {
        actionType: ActionType.Read,
        content: <p>4. The next section is titled “Imaging your XRP”. This page is important for ALL users, regardless of whether your XRP came pre-assembled. The first think you’ll need to do is download the XRP WPILib image. The steps to do this are a little confusing so follow closely:</p>
      },
      26: {
        actionType: ActionType.Code,
        content: <p>4a. Click on the “XRP-WPILib Firmware” link which takes you to a GitHub page:</p>,
        image: <img src='./images/lesson1_4a.png' />
      },
      27: {
        actionType: ActionType.Code,
        content: <p>4b. There will be a large link on the top of this page that looks similar to the image below, although the exact numbers and dates may have changed relative to the image. <strong>Make sure you’re at the top of the page and that you did not scroll down.</strong> Before clicking on this link, look at the scrollbar in the upper right corner of your browser – it should be quite small. After looking at it and visualizing how large it is, click the big XRP-WPILib link. <strong>It may appear as though nothing on your screen has changed.</strong></p>,
        image: <img src='./images/lesson1_4b.png' />
      },
      28: {
        actionType: ActionType.Search,
        content: <p>4c. After clicking on the link, check your scrollbar again. It should now be larger.</p>,
        image: <img src='./images/lesson1_4c.png' />
      },
      29: {
        actionType: ActionType.Code,
        content: <p>4d. If the scrollbar grew in size <strong>and</strong> the XRP-WPILib link stayed the same, you’re on the right path. If the numbers in the XRP-WPILib link changed after you clicked the link, then go back and make sure you’re scrolled to the top of the page before you click the link. But if it stayed the same, you’re good to go. Now scroll down to the bottom of this page and you’ll see a list of files. Click the xrp-wpilib-firmware file. Again, the numbers may be slightly different on your screen, compared to the image below:</p>,
        image: <img src='./images/lesson1_4d.png' />
      },
      30: {
        actionType: ActionType.Code,
        content: <p>4e. Once you’ve downloaded this image file, go back to the WPILib documentation, to the section titled “Imaging your XRP”: <a href='https://docs.wpilib.org/en/stable/docs/xrp-robot/hardware-and-imaging.html' about='_blank'>https://docs.wpilib.org/en/stable/docs/xrp-robot/hardware-and-imaging.html.html</a></p>,
      },
      31: {
        actionType: ActionType.Code,
        content: <p>4f. Follow steps 2 through 6 under the "Imaging" subheading exactly as they are written. The file referenced in step 5 is the xrp-wpilib-firmware file you just downloaded.</p>
      },
      32: {
        actionType: ActionType.Code,
        content: <p>4g. Now you can connect to your XRP wirelessly the same way you would connect to any other wifi network on your computer. Unplug the robot from your computer then flip the power switch to "on". After a few seconds, a new network should pop up called "XRP-" followed by a number ID. Use the password "xrp-wpilib" to connect. To confirm that you have established a connection, open this webpage: <a href='http://192.168.42.1:5000' about='_blank'>http://192.168.42.1:5000</a>. If it loads, you were successful!</p>,
      },
      33: {
        actionType: ActionType.Read,
        content: <p>There are a couple things to note about connecting to the XRP over wifi. First, when you do so, you will disconnect from any other wifi networks you’re connected to, meaning you will probably lose internet access if you’re connected to your internet over wifi. You can maintain internet access and connect to the XRP at the same time if you connect to your internet with an ethernet cable, but if you’re not connecting to the internet with a cable, be prepared to lose access. Third, sometimes on Windows the network connection screen might look like the first image below while you are connected. If your screen sits with scrolling white dots, you’re probably connected after a few seconds. It might also say “No Internet” (second image), while in reality, you’re still connected to the XRP – you just don’t have access to the internet, because your XRP is just a robot, not a router that connects you to the outside world like you’re usually connected to with wifi.</p>,
        image: <img src='./images/lesson1_4q.png' />,
        more_images: <img src='./images/lesson1_4q1.png' />,
      },
      34: {
        actionType: ActionType.Read,
        content: <p>Congratulations! You’re finally done setting up your XRP. It’s time to make it move!</p>
      }
    },
    'Part 2 - Running Your First Program': {
      35: {
        actionType: ActionType.Code,
        content: <p>Navigate to this page in your browser: <a href='https://docs.wpilib.org/en/stable/docs/xrp-robot/programming-xrp.html' about='_blank'>https://docs.wpilib.org/en/stable/docs/xrp-robot/programming-xrp.html</a> and open VSCode. Make sure you’re connected to your XRP through your wifi network.</p>
      },
      36: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson1_31.png' />,
        content: <p>Follow the steps in the linked page all the way to the end. There are a couple items that you’ll need to specify that are not covered by the linked page. First, when it asks you to select a language, pick Java (as shown below). Head to the next screen on this interactive course before moving on.</p>
      },
      37: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson1_32.png' />,
        content: <p>For the “Base Folder” field, you can choose whatever you want in your filesystem, but it might be a good idea to create a folder called “Development” in an easy-accessible location, where you put all your XRP projects. For the project name, you can again enter whatever you want. “ExampleProgram” might be a good name for your first project. Leave the “Create a new folder?” checkbox checked. For “Team Number”, if you belong to an FRC team, you can enter your team’s number. If you do not, or you don’t know what an FRC team is, you can enter “0000”. Do not check the “Enable Desktop Support” checkbox. Pictured below is an example. When you're finished with this, head to the next screen on this interactive course.</p>
      },
      38: {
        actionType: ActionType.Code,
        content: <p>Back on the “Programming the XRP” webpage, you can ignore the paragraph right near the end that says “If you changed the XRP network settings...”. This means the last thing you’ll do in the instructions is press F5, which will deploy the example project. Go ahead and do this! If when you press F5 you get any sort of build error (you will see red text near the bottom of your screen saying build failed), try rebooting VSCode and your XRP, re-connecting to your XRP’s wifi (remember that will take a minute for the wifi network to pop up), and deploying again. Sometimes VSCode will fail to contact the XRP even if there is nothing wrong with your code, but rebooting solves this.</p>
      },
      39: {
        actionType: ActionType.Search,
        image: <img src='./images/lesson1_34.png' />,
        content: <p>After you deploy your code, VSCode will bring up a new interface (called the “Robot Simulation” interface) that looks something like this. Note 1: Sometimes the Robot Simulation window will not open the first time you press F5. If this happens to you, simply click the red square to end your program, and press F5 again.</p>
      },
      40: {
        actionType: ActionType.Search,
        image: <img src='./images/lesson1_35.png' />,
        content: <p>Note 2: If you have the FRC Driver Station application installed on your computer, you may not see the Robot State box in the upper left of the image below. Instead, you will use the FRC Driver Station app to enable/disable your robot and select modes. If you don’t know what the FRC Driver Station is, don’t worry about this note.</p>
      },
      41: {
        actionType: ActionType.Code,
        content: <p>This interface lets you control the XRP and see various output from the onboard sensors. But what we’re most interested in right now is making it move. The simplest way to do this with the sample program is to enable its autonomous program. Enabling the autonomous program will cause the XRP to drive forward about ten inches, turn around, drive back to its original location, and then turn around again. Make sure you have the XRP somewhere where it can safely do this (not at the edge of a desk or table) and be ready to enable it. Look at the previous photo, and find the “Robot State” box, in the upper left, highlighted in green. Here you will see a list of four robot states – Disabled, Autonomous, Teleoperated, and Test. As soon as you click Autonomous, the XRP will enable and immediately begin its autonomous routine. When you’re ready, give it a try! After the XRP finishes moving, click the Disabled option to disable it again. Although the XRP is lightweight and low power, making sure robots are disabled when not in direct use is a critical safety practice.</p>
      },
      42: {
        actionType: ActionType.Code,
        content: <p>Now that you’ve made the XRP move on its own, it’s time to try driving it yourself. If you look at the window called “System Joysticks”, highlighted in red on the last image, you will see any joysticks that you have plugged in to your computer. In the example, there is an Xbox controller plugged in, but you can use anything that your computer recognizes as a joystick. There’s an additional window called simply “Joysticks”, highlighted in yellow, and these are the joysticks that your code and XRP are looking at for input. You may not see any joysticks listed in this window. If that is the case, you can simply drag and drop your joysticks from the System Joysticks window, to the Joysticks window. In the example photo, the Xbox Controller has been dragged to joystick 0. Do likewise – drag whatever joystick you want to use as your controller to the 0 slot. If you have multiple joysticks plugged in to your computer, you may need to do some quick tests to figure out which one is which. How to do this is explained next.</p>
      },
      43: {
        actionType: ActionType.Search,
        content: <p>After dragging your joystick so the Joysticks window, try moving your joystick around and pressing some buttons. You will see the yellow squares at the bottom of the Joysticks window fill/unfill as you press and release buttons, and you can see the axis values change in value as you move the sticks around. This is how you can test which joystick in the System Joysticks is which if you are not sure. If you have one joystick dragged to the joysticks window and pressing buttons/moving the sticks doesn’t change any of the values, you probably dragged a different stick.</p>
      },
      44: {
        actionType: ActionType.Code,
        content: <p>Once you’ve gotten your joystick to register, and you’ve confirmed it’s in the Joystick[0] slot, you’re ready to enable your robot! Look back at the robot state box, and when you’re ready, click Teleoperated. This will enable the robot. Now you can start trying to drive it around! If you press various buttons and/or sticks on your joystick/controller, you should be able to make the robot move. However, it may or may not control as you expect. For example, by default, if you’re using an Xbox controller, the left joystick will control the robot moving forward and backward, but the left trigger will control turning, and you’ll only be able to turn it one direction since the left trigger can only register positive values (as opposed to a joystick, which can register positive or negative values, e.g. if you push it forward or backward.) Now disable the robot. Your first task for you to start programming will be to fix the controls so it can drive normally. If your robot does drive as expected, which could happen for some controllers, then you can still follow the lesson. You’ll simply change it to drive abnormally, and then fix it again.</p>
      }
    },
    'Ending the Executing Program': {
      45: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson1_40.png' />,
        content: <p>After you press deploy your code, a small box with a few buttons will pop up in the top of VSCode. While this box is visible, you may not be able to deploy additional code to the XRP – VSCode may give you an error. When you want to deploy new code, simply click the red square in this box first, and then you can deploy your code:</p>
      }
    },
    'Fixing the Controls': {
      46: {
        actionType: ActionType.Search,
        content: <p>As discussed above, you can look at the robot simulation interface, and see changes in the joystick section as you move the joysticks or press buttons. Decide which joystick axis you want to control turning. For example if you’re using an Xbox controller, this might be the left joystick being pushed left or right, or the right joystick being pushed left or right. If you’re using a single standalone joystick, you don’t have as many options. But either way, decide what you want, and then start pushing the joystick that way. On the joysticks interface you will see a value change. For example, it might move from 0 to 1 or -1 depending on which direction you push it. The important thing here is to note which axis is changing. The axes are labeled from 0 to 5 in brackets, like so: Axis[4]. Determine which axis is changing, and remember this number.</p>
      },
      47: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson1_42.png' />,
        content: <p>Now let’s dig into the code. Back in VSCode, open the “Explorer” (highlighted in red, upper left, see the picture below) and then click on src, java, frc, robot, and then finally double click on RobotContainer.java to open it.</p>
      },
      48: {
        actionType: ActionType.Search,
        image: <img src='./images/lesson1_43.png' />,
        content: <p>If you’re brand new to programming, there is a lot to take in here – but don’t worry about that. We’ll discuss everything in time, but for now let’s get those controls fixed. Scroll down in RobotContainer.java until you see line number 97. The lines are numbered on the left side of the code. On line 97, you’ll see this:</p>
      },
      49: {
        actionType: ActionType.Code,
        content: <p>At the end of the line, you’ll see “-m_controller.getRawAxis(2))”, highlighted in red in the previous image. This line sets which axes of the joystick are being used to control the robot. Change the 2 to whatever axis you identified when testing the controls. If your controls were already correct, try changing it to something else, following the next step, and then changing it back. Once you do this, you can press ctrl+s to save, and F5 to deploy your code to the XRP again. Once the code finishes deploying, you can enable it again and try out your new controls. If you put the right axis, you’ll be able to drive your robot comfortably! If the controls aren’t what you expected, double check your axes again when you push on them using the joysticks interface, and make sure you changed the correct value in the code. Now that you have your XRP driving around, have some fun with it! You’ve taken your first steps into writing code and you already have a robot driving around.</p>
      }
    }
  },
  'Lesson 2 - Intro to Java - Variables': {
    'totalParagraphs': 20,
    'Introduction': {
      0: {
        actionType: ActionType.Read,
        content: <p>In Lesson 1, you got your XRP driving around and made a small code change. In this lesson,
          we’ll talk a little bit about Java as a programming language so you can start to make sense of all the
          folders and files you see in VSCode.</p>
      }
    },
    'Printing Output': {
      1: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson2_1.png' />,
        content: <p>One of the simplest things you can do in Java is tell the program to output text. You can do this by calling one of two “methods”. We will talk about what a method is shortly, but for now just think of it as some piece of code can you “call”, or invoke, to do something. Java executes code starting at the top of the file, and then executes lines one by one from top to bottom of the file. So, inserting lines into a program will result in them being executed. The two methods to output text are:</p>
      },
      2: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson2_2.png' />,
        content: <p>In both the method calls above, the text in quotation marks will be outputted. In the second one, a line break will be added to the end of the text. The only difference is the addition of “ln” (with a lowercase L) after “print”, which is abbreviation for “line”. So, in English, system-dot-out-dot-print, and system-dot-out-dot-print-line. You can add these lines of code to your XRP program and try them out for yourself. Open Main.java, which is in the same location as RobotContainer.java from the previous lesson (explorer-{">"}src-{">"}main-{">"}java-{">"}frc-{">"}robot) and scroll down to line 23. Here you can insert these lines. Make sure to put them before the line that says RobotBase.startRobot(Robot::new);. Here is an example:</p>
      },
      3: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson2_3.png' />,
        content: <p>After you do this, you press F5 to run your program and click on the TERMINAL output window example shown below. (It will take a few seconds to compile and run. You do not need your XRP powered on to do this test. You may need to scroll up in the terminal window, but if you look closely, you will see your output text. Here’s the output from running the example above; you can see the difference between print and println because some of the outputs create new lines and some do not.)</p>
      },
      4: {
        actionType: ActionType.Code,
        content: <p>In general, you do not want to put code in the location where we put these output statements, so after you run your test and get it working, delete these lines. We will talk more about why this is later.</p>
      }
    },
    'Methods': {
      5: {
        actionType: ActionType.Read,
        content: <p>With the output statements above, you’ve added your first method calls. In Java and most other programming languages, complex programs are broken down into many smaller chunks of code by writing methods. While we used a built-in method with System.out.println, you can also write and call your own methods. Almost everything that happens in a Java program is a compilation of methods, because methods can call other methods. As an example of this, think about a laptop computer, when you turn it on. When it turns on, a lot of things need to happen – it needs to start powering its hardware, it loads its operating system, it turns on the screen, etc. – but you only push one button to make all of this happen. You can think of pushing the button as calling a method that turns on the computer. That method might call some of sub-methods, for example one to power the hardware, one to load the operating system, and so forth. The code to do each of these individual tasks is localized in their own methods, and the person calling the method (in this case you, when you power on the machine) doesn’t really care about how those things work, you just call the method by pushing the power button and everything works. Methods are a critical building block of programs because they allow code to be re-used – the code to, for example, open a web browser window might be called when you click on the browser icon on your desktop, but also if you click a link in this document and it opens a window on its own. In both cases, a method to open a browser window was called, but the person programming that functionality only had to write that method once – they did not have to re-write it for every possible way to open a browser window.</p>
      }
    },
    'Variables': {
      6: {
        actionType: ActionType.Read,
        content: <p>We’ll talk more about methods in a bit, but before we do that, let’s talk about another concept called a “variable”. A variable is some value that exists in your program that has a name and can be changed and used. For example, you could have a variable called “robotSpeed” that represents the current speed of your XRP in inches per second. Since the XRP has encoders on the drive motors, which measure the rate of rotation, you could do some math to determine the current speed at which the wheels are spinning, and then store that value in robotSpeed. Then you could do something like outputting the speed to the terminal using System.out.println (SOP) and get a real-time update of your robot’s speed. You could even write a method that does all of this for you!</p>
      },
      7: {
        actionType: ActionType.Read,
        content: <p>Variables have different data types. For example a data could be an integer, in Java called an int, or it could be a decimal, which in Java could be called a double. There are other ways to represent these numbers in Java, but for now we’ll focus on int and double.</p>
      },
      8: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson2_8.png' />,
        content: <p>To create, or declare, a variable you give it a name and a data type. In Java you do this like so:</p>
      },
      9: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson2_9.png' />,
        content: <p>You can assign values to variables using the assignment operator, which is an equal sign. If you’ve taken algebra in school, then you’ll be used to the equal sign meaning something slightly different – it signifies that two halves of an equation are, in fact, equal. In Java, it sets the first half of the equation equal to the second half. (If you haven’t had algebra yet, don’t worry about this comparison.) Here’s an example of assigning values to variable:</p>
      },
      10: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson2_10.png' />,
        content: <p>You can also declare and initialize, or set a value, for a variable in a single line of code:</p>
      },
      11: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson2_11.png' />,
        content: <p>Once variables exist, they can be changed. For example, a robot’s speed changes frequently during operation, so if you were to have a variable representing the robot’s speed, it would need to constantly updated. You do this the same way as you did when you assigned the variable’s value, using the equal sign. Here is a short sample program that declares and initializes two variables, outputs their values, and then updates one of them and outputs its value again. There are a couple important things to notice here. First, we’re declaring and initializing variables. Then we use SOP to output the values, but instead of a hardcoded text string, we’re using a variable when we call SOP. Then, we change the value of one of the variables and output it again. Also, we change between using print and println, when we want to have text on the same line vs using line breaks. Try writing this program for yourself in the same place in Main.java where you tested your SOP statements earlier.</p>
      },
      12: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson2_12.png' />,
        content: <p>If you haven’t clicked the red square toward the top of your screen to stop your prior program from running yet, do so now. As mentioned in lesson 1, you’ll want to click the red square to stop the already-running program each time you want to deploy a code change, so keep that in mind going forward. Here is the output from that program in the terminal (again, you may need to scroll up to see it):</p>
      },
      13: {
        actionType: ActionType.Code,
        content: <p>The last thing you might notice about this short program is that on line 32, there is text in green that reads as an English sentence, not Java code. The line is prefaced by two forward slashes - //. Putting two forward slashes in a line indicates that the rest of that line is a comment – Java will ignore it, so you can type whatever you want without causing an error. This is a helpful tool for writing text that explains what the code does, for humans to read. We’ll talk more about comments later. For now, undo all your new additions to Main.java, because as mentioned before we generally don’t want to put code here. Next we’ll do a small project to get you a little bit more practice with methods and variables so you can see how you can use them to modify the behavior of your XRP.</p>
      }
    },
    'Modifying Your XRP’s Drive Behavior': {
      14: {
        actionType: ActionType.Search,
        content: <p>Let’s take a look at how you can use variables in code to change the behavior of your robot. Open the file called Drivetrain.java. You can find it in the “Subsystems” folder in src/main/java/frc/robot. On lines 58-60 there is a method called arcadeDrive. Unlike System.out.println, this method is a custom-created method in our code, as opposed to a method native to the Java programming language. We will talk more about user-created methods soon. For now, take a look at line 58. There are parentheses, inside of which you see “double xaxisSpeed, double zaxisRotate”. These are variables that are being declared. This is a slightly different way to declare variables which we’ll talk more about soon. What’s important about these variables is when this code runs, they are assigned values dynamically. This is different than when you declared variables above and set them equal to a value. Again, we’ll discuss it more soon, but for now, just know that whenever this code runs, these variables are assigned the values that are read from the joysticks. Remember, the joysticks range from -1 to 1, so that’s the possible range these variables could receive. If one joystick axis is halfway forward and the other is all the way back, they would have values of .5 and -1, respectively.</p>
      },
      15: {
        actionType: ActionType.Code,
        content: <p>On line 46, we call another method, and pass in the same variables. We didn’t really talk about “passing in” when we were using SOP, but to pass in means to send some information to a method. With SOP, you’re passing in the text you want to print. The method prints whatever it’s given, so you give it what you want to print. Line 46 functions the same way, except you’re passing in joystick values instead. We want to get some practice seeing how variables can affect our robot. If you press F5 right now and deploy your code to your XRP, you can try driving it around for a moment. Get a feel for how fast it goes when you give it full throttle, half throttle, etc. We’re going to modify the throttle power and then you can compare the two.</p>
      },
      16: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson2_16.png' />,
        content: <p>In this method, the throttle output is represented by the variable called “xaxisSpeed”. To modify the power, simply insert an additional line on line 46, before the previously existing line 46, that looks something like this:</p>
      },
      17: {
        actionType: ActionType.Code,
        content: <p>You don’t have to use .5, but it’s a good choice to make the effect obvious. Do choose a number between 0 and 1. Then run your code and try driving your robot around. You’ll notice that the power output is scaled by whatever number you chose. Thinking about the code, this makes sense – you took the power and multiplied it by some coefficient. Now try a few other values. Try a number greater than one, try zero, and try a negative number. Before you deploy each change, try to predict what will happen. Were your predictions correct?</p>
      },
      18: {
        actionType: ActionType.Code,
        content: <p>A number greater than one will not increase the maximum speed of the robot, because that is physically limited by the hardware, however it will reduce controllability because even a small amount of joystick input will result in sending maximum power output. Zero will make any input from that joystick irrelevant. A negative number will scale the output by whatever coefficient you chose and also invert forward and backward. If you want, you can also try playing around with the zaxisRotate variable, or even both variables at once.</p>
      },
      19: {
        actionType: ActionType.Read,
        content: <p>Playing with these variables demonstrates how you can use variables to control your robot. For example, with the default code, the turning controls are pretty sensitive – if you’re going full power forward and try to turn at all full power at the same time, your robot will turn, but it will stop moving forward at all. It might be more comfortable to drive if the robot turned while still moving forward if both joystick axes are given max power. Scaling the rotate by .65 and leaving the speed at full power, for example, would achieve this, although it would reduce the max speed at which one could turn even when not driving forward. In a future lesson we’ll cover how we could get the benefits of the scaled turn at full power without sacrificing anything. For now, you’ve developed an understanding of what variables are and how you can use them, and we’ll keep building upon this knowledge.</p>
      }
    }
  },
  'Lesson 3 - Methods, Classes, and Objects': {
    'totalParagraphs': 21,
    'Introduction': {
      0: {
        content: <p>In Lesson 2 you learned what methods are, but we only scratched the surface. In this lesson we’ll introduce two more critical concepts – classes and objects. We’ll learn how to utilize the buttons on your joystick and make the on-board lights on the XRP turn on and off. Start off by creating a new XRPReference project called “Lights”.</p>,
        actionType: ActionType.Code,
      }
    },
    'Classes & Objects': {
      1: {
        content: <p>Java is what is known as an “object-oriented” programming language, or OOP. The basic concept behind OOP is that there are classes, which represent real-world idea or concepts, that can be described in code. For example, you could have a “Car” class, and in code, you could describe a car, by doing things like keeping track of its model, make, max speed, current speed, etc. Structuring code like this makes it easy to think about because your code relates to your real-life concept of what you’re working with. An object is an instance of a class. For example, you could have a Car class, and then individual objects that represent individual cars. In Java, each class is typically represented by one file, and each file represents one class. This is why you in the explorer you see filenames that correspond to concepts and ideas that make sense in English. For example, there is “Robot.java” which represents a robot, “Drivetrain.java” that represents a drivetrain, and so forth. We’ll do a deep dive on classes and objects soon, but for today we’ll keep moving quickly and get you writing code before going too in-depth. As you read through the next few paragraphs, think about the big picture and don’t worry too much about remembering each specific keyword, because you’ll remember them better after we go in more depth, and you can refer back to this lesson and re-read the following paragraphs as needed until then.</p>,
        actionType: ActionType.Read,
      },
      2: {
        image: <img src='./images/lesson3_2.png' />,
        content: <p>You can create classes by defining them in files. For example, the Drivetrain.java file defines the Drivetrain class as mentioned above. If you open Drivetrain.java and look at line 14, you’ll see the text “public class Drivetrain” which, declares the Drivetrain class. Then you’ll see several lines that look like normal variable declarations “double kWheelDiameterInch = 2.75591;”, but with extra words in front. Don’t worry about those extra words for now. These are variables that belong to the Drivetrain class and help create a logical model of a drivetrain. Classes can be composed of variables that are relevant to the class, which can then later be accessed when using the class.</p>,
        actionType: ActionType.Search,
      },
      3: {
        actionType: ActionType.Search,
        image: <img src='./images/lesson3_3.png' />,
        content: <p>If you look at lines 20 and 21, you’ll see two more variables declared – m_left and m_rightMotor. This makes sense – thinking about the XRP, it has two motors, one on each side. However, these variables are unlike variables you’ve seen before. Instead of being of type int or double, they’re of type XRPMotor. What is a XRPMotor? Well, turns out you can hover your mouse over the word XRPMotor to get a brief description. There’s a lot of technical information in the pop-up that you can ignore for now, but the key part is the first sentence: “REV Robotics XRPMotor Speed Controller.” A XRPMotor represents a real-world object called a speed controller, which physically handles outputting voltage to motors to make them spin. In this case it’s called a XRPMotor and manufactured by the company REV Robotics.</p>
      },
      4: {
        actionType: ActionType.Search,
        content: <p>The Java programming language is used worldwide for billions of devices and programs, and certainly cannot natively support every piece of hardware ever manufactured, like a XRPMotor motor controller. So how can we declare a variable of type XRPMotor? The answer is, once a class is created in Java, you can declare variables of that type. So, somebody made a class called XRPMotor, just like we have a class called Drivetrain. Once the XRPMotor class exists, we can create XRPMotor variables. These variables are different than more “basic” variables like ints and doubles. Ints and doubles are called primitive variables because they are inherent to Java. There are a few other primitive variable types, for example boolean variables which represent either “true” or “false”. But variables of non-primitive types, or in other words variables that are of the type of a class, are called objects. Once a class exists, objects of that class can be created. An object of a class is called an instance of that class. So, referencing the Drivetrain class we’re looking at, on line 15 the class is declared. On lines 16 through 20, four primitive variables are declared of type double, and on lines 24 and 25 two objects are defined of type XRPMotor. The XRPMotor class is defined somewhere else, but we’re not worried about there here. Someone else did the work of making the XRPMotor class work, and now you get to use it. Notice how when variables that are objects are created, they use an additional keyword “new”, and then repeat the object name – for example on line 24 when declaring the m_leftMotor XRPMotor object, it says “new XRPMotor(0)”. Again, we’ll talk about this more later on but for now, when you see the “new” keyword, that’s your clue that it’s an object being created instead of a primitive. Another clue is that for objects the variable type is capitalized – e.g. XRPMotor instead of xrpMotor, but not for primitive variables (e.g. int instead of Int.)</p>
      },
      5: {
        actionType: ActionType.Read,
        content: <p>That’s a lot of information to take in so let’s do a quick recap. In Java there are classes, which can be defined, and after doing so they can be used by creating an instance of the class, which is called and object. Classes can be given variables which describe the class, for example describing a drivetrain by declaring that it has a left and a right motor. These variables can then be used when working with the class. Let’s show how that happens.</p>
      },
      6: {
        actionType: ActionType.Search,
        content: <p>You already saw how on lines 24 and 25, two XRPMotor objects are created. On line 33, these objects are used to create a “DifferentialDrive” object. DifferentialDrive is another class that has been created for us that has some built-in functionality that handles the math that converts joystick values to motor outputs. For this class to work it needs motors to output to, which is why you can see at the end of line 33 that the two XRPMotor objects are being used to create the DifferentialDrive object, called m_diffDrive. Scroll down and on line 59 you’ll see m_diffDrive.arcadeDrive(xaxisSpeed, zaxisRotate), which you’re familiar with from lesson 2. This is an example of using an object to do something – in this case, the m_diffDrive object, and we’re using the “arcadeDrive” method that has been declared as part of the DifferentialDrive class. This is another critical concept when it comes to classes and objects – methods can be defined as part of the behavior for the class. Then those methods can be called using objects of that class.</p>
      },
      7: {
        actionType: ActionType.Read,
        content: <p>We’ll go in more depth soon but now let’s dive into our project of using buttons on the joystick to turn a light on and off. To do this there are a couple steps. First, we’re going to have to create two commands, one to turn the light on, and one to turn it off. Commands are another concept we’ll talk about soon but for now you can think of a command as “something the robot can do”. For example, you could make a command to drive forward, a command to stop, a command to toggle a light, etc. In this case we’ll make two; one each for turning the light on and off. Let’s walk through it step by step. After the commands are created, you’ll need to add a couple lines of code that tell the commands to run when a button on the joystick is pressed. Let’s get started.</p>
      },
      8: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_8.png' />,
        content: <p>The first thing is to create the commands. Let’s start with the command to turn the light on. Navigate to the “commands” folder in src/main/java/frc/robot. Right click on the folder itself in VSCode and select “Create a new class/command” at the bottom of the popup.</p>
      },
      9: {
        actionType: ActionType.Code,
        content: <p>This will bring up a dropdown with a list of options. Select “Command”. This brings up a prompt to type a class name. Type “TurnLedOn” and press enter. This brings up a new file with some method stubs – a stub is a method without any contents. Lines 17, 21, 25, and 29 are examples of this. Now follow these steps to create this command. Note that you need to follow the steps in order, or the line numbers won’t sync up, because the line numbers assume that you have entered the lines described in the previous steps.</p>
      },
      10: {
        actionType: ActionType.Code,
        content: <p>1. Move your cursor to the very end of line 7, after the semicolon, press enter, and then type “import edu.wpi.first.wpilibj.xrp.XRPOnBoardIO;”. This line tells the program that it will need to use the robot’s on-board IO (input/output) subsystem. This is the subsystem that has the lights we’re going to turn on. Note how the line ends with a semicolon. Most lines of code in Java end with semicolons; this is how you tell Java that the line is finished. The exceptions are lines that end with opening and closing curly brackets, for example lines 10, 14, and 18 in the image in step 3. You’ll learn more about the difference between these kinds of lines soon.</p>
      },
      11: {
        actionType: ActionType.Code,
        content: <p>2. Put your cursor at the end of line 10 and press enter, and then type “private final XRPOnBoardIO m_io;”, then press enter. Again – don’t forget the semicolon. In step 1 we told our program that it will need to use an XRPOnBoardIO subsystem, and on this line we declare that XRPOnBoardIO subsystem for it to use.</p>
      },
      12: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_12.png' />,
        content: <div>
          <p>3. Put your cursor inside the parentheses on line 14 (NOT the curly bracket at the end) and type “XRPOnBoardIO io”. Then go to the end of line 15 (the next line), press enter, and add one line of code. This line initializes the XRPOnBoardIO object.</p>
          <ol type='a'>
            <li>m_io = io;</li>
            <li>When you’re done with these steps, lines 10-18 should look like this:</li>
          </ol>
        </div>
      },
      13: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_13.png' />,
        content: <p>4. Move your cursor to inside the curly brackets on line 25 (this time NOT the parentheses.) Press enter and then add a line of code by typing “m_io.setLed(true);”. Your execute method should now look like this:</p>
      },
      14: {
        actionType: ActionType.Code,
        content: <p>Congratulations! You’ve now created your first robot command. Unfortunately, there’s no way to activate this command yet, but we’ll add that in a moment. First, let’s create the sister command that turns the LED off. Follow the steps above again to create another command in the same folder, but call it “TurnLedOff”. Follow all the same steps to add the code to the new command, but when you get to line 27 where you do m_io.setLed(true);, use “false” instead of “true”. Once you’ve created the second command, it’s time to hook them up to a joystick button.</p>
      },
      15: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_15.png' />,
        content: <p>The first step in hooking them up to a joystick button is figuring out which joystick button is which. This is a similar process to how you figured out which joystick axis was which in lesson one. Open the robot simulator interface if you don’t already have it open (you can press F5 to deploy your code right now if you’re connected to the XRP) and look at the joysticks window. You might need to re-drag your joystick from the Systems Joystick window, to the Joysticks window. Press whatever button on your controller you want to control the light turning on and off, and look at the yellow squares in the joystick window. One of them will light up. Count which number it is, from upper left, starting at one. For example, in this image, button 3 is lit up. Make note of which button lights up as you will need to remember the number in your code.</p>
      },
      16: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_16.png' />,
        content: <p>Now go to RobotContainer.java, put your cursor at the end of line 57, press enter twice, and type out code to match the image below. However, where there are red boxes, change the number 1 to whatever number your button is. These lines of code create a “JoystickButton” object and bind the commands you created to execute when you press and release the button, respectively. You’ll see the red underlines indicating you have errors, and we’ll fix those next. Note that it’s possible that VSCode will fix the red underline under “JoystickButton” on its own. If it does so, that red underline will go away, and all the line numbers in your code will increase by one relative to the image below.</p>
      },
      17: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_17.png' />,
        content: <p>If VSCode does not fix the red underline under JoystickButton automatically, you’ll need to do so yourself. To do so, click on the green text JoystickButton, and you’ll see a little yellow lightbulb pop up to the left. VSCode has limited capabilities to fix common problems for you, and you can access this functionality by clicking on yellow lightbulbs when they appear. Do so and then click “Import ‘JoystickButton’. This will add a line of code to the top of your program, telling the RobotContainer class to look for the JoystickButton class, which you use when you declare your button1 variable on line 67 above (now 68 after it inserts a line of code.) You will have the same errors on your TurnLedOn and Off commands, because RobotContainer needs to look for those files as well. Use the same method to import those two files as well, and your errors will go away. As alluded to above, sometimes VSCode will fix these errors on its own without you needing to make these clicks, but often you’ll have to do this.</p>
      },
      18: {
        actionType: ActionType.Search,
        image: <img src='./images/lesson3_18.png' />,
        content: <p>When you’re done importing the classes using the lightbulb, your code should be error-free and look like the photo below:</p>
      },
      19: {
        actionType: ActionType.Code,
        content: <p>Now you’re done! You can deploy your code to your XRP, enable it, and try pressing your button. You will notice that a light near the back of the XRP lights up while you’re holding the button down, and turns off when you release it.</p>
      },
      20: {
        actionType: ActionType.Read,
        content: <p>Congratulations on finishing the first three lessons. You’ve now learned a lot of the basics of Java and robot programming. There’s still a lot to learn but if you’ve made it this far, you’re doing well and you should have a basic understanding of how software can be used to effect the behavior of the robot. Over the next lessons we’ll build on that understanding, which will increase both your skills and your confidence in writing your own programs.</p>
      }
    }
  },
  'Lesson 4 - Methods Deep Dive': {
    'totalParagraphs': 15,
    'Introduction': {
      0: {
        content: <p>Over the past two lessons you’ve learned what methods are and used them, but you’ve probably noticed a lot of things that you don’t understand about them. In this lesson we’re going to start building your understanding. Remember, methods are basically self-contained chunks of code that can be called in some other location, so the code doesn't need to be repeated. There are built-in methods (for example System.out.println) and you can also write your own methods. To do this lesson, we’re going to want a clean workspace in VSCode that doesn’t interact with the XRP, so we can write some basic methods and run them without needing to connect to the robot. Then in the next lesson we’ll switch back to working with the XRP and you’ll write some code that gives the XRP a slightly different control scheme while you hold down a button.</p>,
        actionType: ActionType.Read,
      }
    },
    'Setting Up a New Workspace': {
      1: {
        image: <img src='./images/lesson4_1.png' />,
        content: <p>To set up a new workspace in VSCode, click on the “Java Projects” button in the lower-left corner of your screen. Then click the “+” icon. If you don’t see the Java Projects button, click the Explorer icon in the upper-left corner of your screen, and it will appear.</p>,
        actionType: ActionType.Code,
      },
      2: {
        image: <img src='./images/lesson4_2.png' />,
        content: <p>After clicking the plus, select the “No build tools” option from the drop down:</p>,
        actionType: ActionType.Code,
      },
      3: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson4_3.png' />,
        content: <p>A window will pop up asking you to designate a folder for the project. You can choose whatever folder you want. You might find it helpful to create a folder somewhere on your computer to hold all of your programming projects. Regardless of where you locate it, select a folder for the project location. Type a name for your project and press enter; a good name to use is “MethodsScratch”. After you press enter, you’ll be greeted with a new instance of VSCode and you won’t see any code, but your project will already have a file called App.java. You can open it by drilling into the “src” folder in explorer on the left. Open it and you’ll see something like this</p>
      },
      4: {
        actionType: ActionType.Code,
        content: <p>Go ahead and press F5 and you’ll see “Hello, World!” output in the terminal at the bottom of your screen. Outputting “hello world” is a common first program to write and is often used in examples and teaching. Try typing something else in the quotes in the SOP on line 3 and running your program again, just to prove that the code you’re running is the code you’re looking at. Now that you’re set up, you’ll be able to try out writing your own programs from scratch and running them here!</p>
      }
    },
    'The Main Method': {
      5: {
        actionType: ActionType.Search,
        image: <img src='./images/lesson4_5.png' />,
        content: <p>Every Java program must have exactly one “main” method, defined by the rather confusing-looking chain of word “public static void main(String[] args)”. Each of those words have a meaning you will learn soon – in this lesson you’ll learn what “void” means, and you can ignore the other words there for now. But the word “main” is the name of the method. Each program must have exactly one, because the main method is where your program starts, and every program needs a defined starting point. In practice there’s usually not much code in main methods; it simply calls some other method with a single line. As an example here’s the main method of your XRP project (you can find this in Main.java in java/frc/robot if you want to look for yourself.) Having only one line of code in your main method is a good practice to follow although for the sample programs you’ll write today it’s not super important</p>
      },
    },
    'YouTube Videos': {
      6: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson4_6.png' />,
        content: <p>Now that you have a work environment setup where you can code, it’s time to get some practice. Throughout this course there will be links to various YouTube videos. There are a couple things to keep in mind with YouTube videos. First, they’re often in a different application for writing code. You might see the author use keyboard shortcuts or interface buttons that don’t exist in VSCode. However, the code itself runs the same way, so don’t worry about matching the keyboard shortcuts. Second, you may find it beneficial to change the playback speed to go either faster or slower depending on your prior experience and understanding. You can change the playback speed by clicking the gear in the lower-right corner and selecting a speed.</p>
      }
    },
    'Method Types': {
      7: {
        actionType: ActionType.Code,
        content: <p>Watch this video on YouTube for a walkthrough on writing some simple methods, and follow along by writing out and running the methods yourself in VSCode: <a href='https://www.youtube.com/watch?v=-IJ5izjbWIA'>https://www.youtube.com/watch?v=-IJ5izjbWIA</a> In the video, two different kinds of methods are used – some that perform some action without returning any data, and some that return data. This is where the void keyword comes in. A method that does not return any data is declared using the void keyword. A method that does return data is declared using the type of data it returns. Thus far we’ve worked with ints, doubles, booleans (true/false), and a couple of objects. Another important data type that is used in the video is String. A string is simply text. You’ll notice that unlike int and double, String is capitalized like an object. This is because Strings are in fact objects, but they are built-in objects that are part of Java. Strings being objects will matter more later but doesn’t matter too much right now for following along with the video. It’s simply good to know so you understand why String is capitalized while int is not.</p>
      }
    },
    'Scope': {
      8: {
        actionType: ActionType.Code,
        content: <p>After finishing the methods video, watch one more video about variable scope, and again follow along by writing out the methods in VSCode: <a href='https://www.youtube.com/watch?v=Y2iN3TO5qOQ'>https://www.youtube.com/watch?v=Y2iN3TO5qOQ</a> "Scope" is the concept of where a variable exists and for how long. Basically, variables declared in a method only exist in that method, and variables declared in a class exist throughout that entire class. A variable cannot be accessed or changed from a location in code where it does not exist</p>
      }
    },
    'Getting User Input': {
      9: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson4_9.png' />,
        content: <p>With the XRP, we got user input in the form of joystick and button presses. With this desktop app that we’re working on, we don’t have a joystick or buttons, but we do have our computer’s keyboard. Let’s write a quick program that gets input from the user and then prints the input back out. To do this, we’ll use Java’s built in Scanner class. The scanner accepts input in the terminal window where your output shows up. You will be able to type a number, press enter, and your program will read that number. Make sure that if your program is looking for an integer, you give it an integer! If you give it a decimal or a String (text), you will get an error. Here is a sample program you can write in VSCode:</p>
      },
      10: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson4_10.png' />,
        content: <p>Run this program and look at the terminal in the bottom of your screen, and it will be asking you for input. Type an integer, press enter, and the program will echo your input:</p>
      }
    },
    'Practice': {
      11: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson4_11.png' />,
        content: <p>You’re now familiar with several concepts in Java: variables, methods, classes, objects, scope, and getting user input. That’s a lot of knowledge, and it’s enough for you to start writing some programs on your own. We’ll make a small calculator app. Create a new project in VSCode (refer back to the start of this lesson if you forget how to do so) and call it Calculator. In your main method, declare a Scanner object and use it to initialize two integer variables. For example:</p>
      },
      12: {
        actionType: ActionType.Code,
        content: <div>
          <p style={{ margin: 0 }}>Now add five methods to your program as follows.</p>
          <ol>
            <li>A "welcome" method that takes no parameters and returns nothing, that outputs a simple "Welcome to calculator" message to the user.</li>
            <li>An "add" method that takes two integer parameters, adds the two integers together, and outputs the result. This method does not return anything.</li>
            <li>A "multiply" method that takes two integer parameters, multiplies them together, and then returns the result as an integer.</li>
            <li>A "subtract" method that takes two integer parameters, subtracts them, and then returns the result as an integer.</li>
            <li>A "cube" method that takes a single integer parameter, cubes it, and returns the result as an integer.</li>
          </ol>
        </div>
      },
      13: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson4_13.png' />,
        content: <p>Then, in your main method, call each of these six methods using one or both numbers that the user input. For the methods that return a value instead of outputting a result, output the value they return in your main method. You can use a variable to do this like so:</p>
      },
      14: {
        actionType: ActionType.Code,
        content: <p>When you're done and you run your program, it should ask for two inputs, and then have five lines of output</p>
      }
    }
  },
  'Lesson 5 - If Statements & Cut-Power Mode': {
    'totalParagraphs': 21,
    'Introduction': {
      0: {
        actionType: ActionType.Read,
        content: <p>In this lesson you’ll learn a critical new concept in programming known as conditionals, or if statements. You use if statements to create conditional logic in your code, for example “if something is true, do something, otherwise do something else”. You’ll then do a project where you use your new knowledge to give yourself some additional control over your robot so you can perform tricky driving maneuvers more easily.</p>
      },
    },
    'If Statements': {
      1: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson5_1.png' />,
        content: <p>If statements in Java are pretty simple to code, and they tend to make a lot of sense logically as well. The basic form is pictured below. This short program declares an int called hour of day and sets its value to 6, and then checks whether that value is less than 10. If it is, it outputs a line of text. Unsurprisingly, if you run this program, it does, indeed, output “Good morning!”. If you were to change the value on line three from 6 to 12, it would output nothing.</p>
      },
      2: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson5_2.png' />,
        content: <p>There are two additional keywords that go along with if statements: else if, and else. Else if allows you to specify a second condition, that will be checked if and only if the first if statement is false. Pictured below is an example. If you run this program, the output will again be “Good morning!”. Even though 6 is indeed less than 15, line 8 never runs because line 5 is true. If you change the value of hourOfDay to 11, then line 8 will be false, line 8 will run and evaluate to true, and the output will be “Good day!”.</p>
      },
      3: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson5_3.png' />,
        content: <p>Lastly, there is “else”. An else clause will run if and only if all the prior clauses evaluate to false. Pictured below is an example. In this case, since hourOfDay is 20, the first three if and else if statements all evaluate to false, so the else statement runs and the output is “Good evening!”.</p>
      }
    },
    'Operators': {
      4: {
        actionType: ActionType.Read,
        content: <div>
          <p>You may have noticed in the prior examples that we used the “&lt;”, or “less than” sign, in our if statements. This is called an “operator” and it is used to compare two values. There are a few other operators, which you may be familiar with from math class:</p>
          <ul>
            <li>&lt;: less than</li>
            <li>&gt;: greater than</li>
            <li>&lt;=: less than or equal to</li>
            <li>&gt;=: greater than or equal to</li>
            <li>==: equal to</li>
          </ul>
        </div>
      },
      5: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson5_5.png' />,
        content: <p>Notice how instead of just using one equal sign, the equal to operator uses two equal signs. This is because if you just use one equal sign, you would be assigning a value to a variable. When you write if statements you need to be careful to use both equal signs, because if you use just one, two bad things will happen. First, instead of checking the value of the variable, you will overwrite its old value with whatever you’re checking against. E.g. “if (hourOfDay = 10)” will overwrite hourOfDay with the value 10. Additionally, <em>the operation of overwriting the value of hourOfDay with 10</em> will be successful, and so the operation will return true. So not only will your variable be overwritten, but your if statement will return true because the overwrite was successful. This will cause errors later in your program, so be careful to always use the double equals sign when checking equality. Here’s an example:</p>
      }
    },
    'Quick Practice': {
      6: {
        actionType: ActionType.Code,
        content: <p>Try a quick demo for yourself using a non-XRP program, like you did in the last lesson, except instead of hourOfDay, use an int variable called “dayOfWeek”. A value of 1 represents Sunday, 2 Monday, etc. through all seven days. Then write an if statement and a series of else if statements that check the value until it finds what day of the week it is, and outputs a line of text saying which day of the week it is. Include an else statement that runs if the day of the week is not a sensible value, or in other words if it’s any value that isn’t between 1 and 7 inclusive. Then run your program and make sure it works correctly. Try it with a few different values and make sure that your code outputs the correct day, and make sure if you give it a value of, say, 12 that your else statement runs correctly.</p>
      }
    },
    'XRP Project – Cut Power Mode': {
      7: {
        actionType: ActionType.Code,
        content: <p>In this project we’ll add a driving mode called “cut power” and bind it to a button on your controller. While the button is held, all power outputs to the XRP’s drivetrain will be reduced, but when the button is not being held everything is normal, letting you switch between drive modes instantly on the fly. This can be useful when you want extra maneuverability while driving. To start, create a new XRPReference project.</p>
      },
      8: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson5_8.png' />,
        content: <p>Create a new command called “ArcadeDriveCutPower” in the commands folder. There’s already a command called ArcadeDrive, and we could modify that one instead, but for this project we’ll just create a parallel command so we don’t need to update other references to the original command. After you create the new command, open the original ArcadeDrive command and copy its entire text and paste it into your new command (overwrite the default text in the new command.) After you do this you’ll get a red squiggly line under “ArcadeDrive” on line 11 because the name of the class doesn’t match the filename. Click on the underlined test and a lightbulb appears. Click the lightbulb and choose the first option (“Rename…”) to let VSCode fix the class name for you, based on the filename of your command.</p>
      }
    },
    'Method Arguments': {
      9: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson5_9.png' />,
        content: <p>Now that you’re more familiar with methods and passing values into them, it’s time to flex your knowledge by adding a parameter to your new command. You’ll need an additional class variable first. We’ll talk about these next lesson but for now navigate to the end of line 14, press enter, and type “private final Supplier&lt;Boolean&gt; m_cutPowerModeSupplier;”. Now you can add a parameter to the method on line 26 called “ArcadeDriveCutPower”. Notice that this method actually spans a few lines with line breaks after each comma. Position your cursor immediately after “zaxisRotateSupplier” on line 29, add a comma and press enter, and add a parameter of type “Supplier&lt;Boolean&gt;” called “cutPowerModeSupplier”. The “Supplier&lt;Boolean&gt;” data type is an advanced concept that we won’t cover in this course, but you can essentially think of it like a boolean variable. In this case that boolean will represent true/false for whether cut power mode is activated. Now that we’ve declared the parameter, it just needs to be initialized. Position your cursor at the end of line 33, press enter, and set your “m_cutPowerModeSupplier” variable equal to the method parameter you just created. Here’s what your class should look like so far:</p>
      },
      10: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson5_10.png' />,
        content: <p>The last thing you need to do in this command is change one more line in the execute() method, on line 45. Make two changes to this line. First, make a new method, again to keep references to the original method intact. On line 45, where m_drivetrain.arcadeDrive is called, change “arcadeDrive” to “arcadeDriveCutPower”. Lastly, add a parameter to the method call so your execute() methods looks like this:</p>
      },
      11: {
        actionType: ActionType.Code,
        content: <p>You will have a red underline on your method call because the method arcadeDriveCutPower doesn’t exist yet. So far you’ve done all the “plumbing” to make sure that the boolean for whether or not the robot is in cut power mode gets to where it needs to go. The next step will be creating this method that doesn’t exist yet, which will utilize the boolean to actually apply cut power to the robot. Make sure to save your code in this file before proceeding.</p>
      }
    },
    'The arcadeDriveCutPower Method': {
      12: {
        actionType: ActionType.Code,
        content: <p>Navigate to Drivetrain.java and find the arcadeDrive method on line 45. This is the method that is being called right now when you drive your robot, as you might remember from prior lessons when you modified the drive code. This time you’re going to copy it and modify it using an if statement. You can start by copying the entire method, adding a blank line beneath it, and then pasting the code in. Then change the name of the method to match your method call from line 45 of ArcadeDriveCutPower.java above. Lastly, add a boolean parameter to the new method, to again match the parameter added in ArcadeDriveCutPower.java. Save your code and navigate back to ArcadeDriveCutPower.java. You’ll notice that line 45 will no longer have a red underline, because now the method you’re calling exists. Of course, since you simply copied the existing arcadeDrive method, your code won’t do anything different yet. Let’s modify your copied method to make it work.</p>
      },
      13: {
        actionType: ActionType.Code,
        content: <p>Back in Drivetrain.java in your method, add a new line at the start of the method and then add an if statement. Your method has a parameter “boolean cutPowerMode”. You want to check if this variable is true or not. If it is you’ll want to scale the values of both xaxisSpeed and zaxisRotate, similar to how you did in the lesson about variables where you modified the drivetrain code. The exact amount to scale them by to make your cut power mode feel good will depend on what physical surface your XRP is driving on and how much friction there is. You can adjust the values after trying it out, but a decent starting point is to scale them both by .7. Creating this if statement and scaling the values is all you need to do here.</p>
      },
      14: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson5_14.png' />,
        content: <p>In the prior lesson where we played with these variables, we changed their values in a very standard fashion:</p>
      },
      15: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson5_15.png' />,
        content: <p>There’s another way to update variables that’s slightly shorter and is nice to use when the update is pretty simple and understandable, such as multiplying by a static coefficient. You can use the “times-equals” operator, like so:</p>
      },
      16: {
        actionType: ActionType.Read,
        content: <p>The lines of code in the previous two images have exactly the same function – they will both update the variables by multiplying them by .7. The second way is simply a shortcut you can use if you want. We’ll use it from time to time in this tutorial. Whether you use it or not is up to you, but you need to recognize it and understand it. It’s also worth noting that you can do the same with other operators, for example +=, -=, etc</p>
      },
      17: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson5_17.png' />,
        content: <p>When you’re done, your method should look something like this:</p>
      },
    },
    'Updating the Default Command': {
      18: {
        actionType: ActionType.Read,
        content: <p>Your new command and method are both ready to go, so the last thing you need to do is update the command that your drivetrain is using, to your new command. Navigate to RobotContainer.java and scroll to line 65. You’ll see a method call for “setDefaultCommand”. This line sets the default command for the drivetrain subsystem. You can set default commands for any subsystem, of which the XRP has two - the drivetrain, and the on-board IO, which controls the lights. Default commands run all the time as long as there is no other command issued to the subsystem. Using the drivetrain as an example, this is generally the case. In teleop, you just want to drive, so there’s generally no reason to issue other commands. There are exceptions to this, for example you could create a command to turn exactly 90 degrees when you press a button. If that command were issued to the drivetrain, the default drive command would stop running until the turn command finishes, and then once the turn command finishes, the default command would turn on again. Other situations where you might not want default commands to run would be during autonomous, where you want to issue specific commands. We’ll do all of these things in future lessons, but for now, we’re just interested in using the default command so we can drive, and we want that default command to be the new command we created.</p>
      },
      19: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson5_19.png' />,
        content: <p>Looking at line 65 again, you see the setDefaultCommand method, and there’s actually another method call inside of it – “getArcadeDriveCommand()”. In VSCode, you can drill-in to any method by clicking on the call for that method and pressing F12. Do this on the getArcadeDriveCommand call and VSCode will navigate you to line 93. Move down one line to 94 and update the “ArcadeDrive” command to “ArcadeDriveCutPower”. You’ll also need to add an additional parameter, since you added a parameter in your command. In order to do this you’ll need to figure out which button you want to use to activate cut power mode. You can do this the same way you figured out which button to use to light up the LED, so do that. If you don’t have the simulation interface open and can’t deploy code because you have errors, you can simply use button 1 for now, and then change it later. Either way, decide on a number for your button, and add a parameter to your method by adding a comma after the “m_controller.getRawAxis(4)”, and then typing the following text: “() -&gt; m_controller.getRawButton(6)”, where 6 is replaced by the number of your button. If you’re using an Xbox controller, 6 will be the right bumper. The reason this line of code looks so messy has to do with the Suppliers that we mentioned earlier won’t be covered in this course. Don’t worry too much about this – there are ways to do all of this without Suppliers, so you aren’t missing out on critical information. We’ll cover this in the future but we’re using them for now because that’s what the example code uses. When you’re done making the changes, your method should look something like this:</p>
      },
      20: {
        actionType: ActionType.Code,
        content: <p>The last thing you’ll need to do is import your new command, which you can do by clicking on the underlined command name, using the lightbulb (VSCode may do this automatically for you.) While you’re there you can remove the unused import for the previous ArcadeDrive command if you want; if you don’t do this, you’ll have a yellow underline pointing out that the import is not used, but it doesn’t affect your program. After you do this you can deploy your code and try out cut power mode! If you still need to, you may want to update which button controls cut power mode. Either way, try driving your XRP, and see how you can hold and release the cut power button to change its characteristics. If you want, you can go back to Drivetrain.java and change the values that you scale the inputs by to make cut power mode cut more or less power</p>
      }
    }
  },
}

for (const key in generated_data) {
    data[key] = generated_data[key]
}

export default data;