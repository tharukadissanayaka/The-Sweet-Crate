   M S B A M L   `   `   `  ����E  AGUIProject, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null'clr-namespace:GUIProject
GUIProject  5   	       GUIProject.Cart   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   *localclr-namespace:GUIProject     5   	     � Title$
  Cart��5   	   $	��450��6   $	��800��6#   .��5	      �  � RowDefinitions 5   
   �� 5      $
��auto �6   �� 5      $��6* �6   �� 5      $��* �6    � ColumnDefinitions 5   
   �� 5      $��3* �6   �� 5      $��1* �6   .+�5   
   �� $��0��6   $��0��6!   $��2��5      $��Center=�5      $
��Bold"�5       �� Padding$ 5q�5      
�������$��	Your Cart��5      $��25(�6   �� 5"   
   $��1��6   $��1��6"   .+�5#      �� -   5        $��15(�5#      $��10q�6"   $��10q�5$      ���#c5af9a���#4F311C.��5)      REMOVE PRODUCT6%   �� 5+      -   5        $��15(�5+      $��10q�6#   $��10q�5,      ���#c5af9a���#4F311C.��5/   0   CONFIRM ORDER50   $   51      &   System.Windows.Controls.DataGrid  54   
   -   5          Name$ itemGrid��55      $��1��56      $��0��6      AutoGenerateColumns$ False��57      $��10q�58      $��Stretch=�59      $��Stretch=�5:         Columns 5;      0  *System.Windows.Controls.DataGridTextColumn  5<      ,  &System.Windows.Controls.DataGridColumn   Header$
 Name��6%      Width5  /System.Windows.Controls.DataGridLengthConverter$ * 6L   1  +System.Windows.Controls.DataGridBoundColumn	   Binding	 63   �� *Name+6L     5=      $ Price��6%   $ * 6R   	 64   �� *	ItemPrice+6R   5?      �� 5A   
   $��2��6   $��0��6!   $��Right=�5B      $��Center=�5C      $��18(�5D      $
��Bold"�5E      
�������$��10q�5G      ��5H      �� *
TotalSum+
 �� StringFormat$
 Total: ${0:F2}���� 5J   
   $t��nC:\Users\Tharuka Dissanayake\Desktop\GUI Project 1\Brown Illustarted World Chocolate Day Facebook Post (1).png��6   $��UniformToFill=�5K      $��3��5L      $��2��5M       K� ZIndex$ -1��5N      5R      5S      