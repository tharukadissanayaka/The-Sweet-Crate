using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace GUIProject
{
    /// <summary>
    /// Interaction logic for HomePage.xaml
    /// </summary>
    public partial class HomePage : Window
    {
        public HomePage()
        {
            InitializeComponent();
        }

        private void Button_Cake(object sender, RoutedEventArgs e)
        {
            CakesPage cakesPage = new CakesPage();
            cakesPage.Show();
            
        }

        private void Button_Chocolates(object sender, RoutedEventArgs e)
        {
            ChocolatesPage chocolatesPage = new ChocolatesPage();
            chocolatesPage.Show();
            
        }

        private void Button_Brownies(object sender, RoutedEventArgs e)
        {
            BrowniesPage browniesPage = new BrowniesPage();
            browniesPage.Show();
            
        }

        private void Button_Toffees(object sender, RoutedEventArgs e)
        {
            ToffeesPage toffeesPage = new ToffeesPage();
            toffeesPage.Show();
            
        }

        private void Button_Puddings(object sender, RoutedEventArgs e)
        {
            PuddingsPage puddingsPage = new PuddingsPage();
            puddingsPage.Show();
           
        }

        private void Button_Muffins(object sender, RoutedEventArgs e)
        {
            MuffinsPage muffinsPage = new MuffinsPage();
            muffinsPage.Show();
            
        }

        private void HomePage_Click(object sender, RoutedEventArgs e)
        {
            HomePage homePage = new HomePage();
            homePage.Show();
            this.Close();
        }

      

        private void Cart_Button(object sender, RoutedEventArgs e)
        {
            Cart cart = new Cart();
            cart.Show();
        }

        private void Logout_Click(object sender, RoutedEventArgs e)
        {
            MessageBox.Show("You have been logged out.");
            this.Close();
        }

        private void AboutUs_Click(object sender, RoutedEventArgs e)
        {
            AboutUs aboutUs = new AboutUs();
            aboutUs.Show();
        }
    }
}
