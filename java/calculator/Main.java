package calculator;

import java.awt.Image;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class Main {
    public static void main(String[] args) {
        JFrame frame= new JFrame("Calculator");
        
        frame.setBounds(1000, 100, 400, 600); //position and size
        Image icon= Toolkit.getDefaultToolkit().getImage("img/iconCalculator.png");
        frame.setIconImage(icon);

        JPanel panel= new JPanel();
        String[] numbers= {"0","1","2","3","4","5","6","7","8","9"};
        String[] operators ={"+","-","*","/"};

        JLabel label= new JLabel();
        panel.add(label);
        // add buttons and events
        for (String buttonLabel : numbers) {
            JButton buttonNumbers = new JButton(buttonLabel);
            buttonNumbers.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    // show the mensage if you press the button
                    //JOptionPane.showMessageDialog(frame, "Has pulsado el " + buttonLabel);
                    
                }
            });
            panel.add(buttonNumbers);
        }
        for (String buttonLabel: operators){
            JButton buttonOperators = new JButton(buttonLabel);
            buttonOperators.addActionListener(new ActionListener() {
               @Override
               public void actionPerformed(ActionEvent e){
                
               } 
            });
            panel.add(buttonOperators);
        }

        
        
        frame.add(panel);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }    
}
