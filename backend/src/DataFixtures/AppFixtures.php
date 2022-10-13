<?php

namespace App\DataFixtures;

use App\Orders\Model\Order;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    const NAMES = [
        'Cyrill',
        'John',
        'Alex',
        'Fox',
        'Mouse',
        'Cat',
        'Dog',
        'Gibby',
        'Debian',
        'Adam',
        'Cyrill',
        'John',
        'Alex',
        'Fox',
        'Mouse',
        'Cat',
        'Dog',
        'Gibby',
        'Debian',
        'Adam',
    ];

    /**
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < count(self::NAMES); $i = $i + 2) {
            $order = new Order(self::NAMES[$i], self::NAMES[$i + 1]);
            $status = random_int(1,3);
            if ($status === 2) {
                $order->delivery();
            }
            if ($status === 3) {
                $order->delivery();
                $order->received();
            }

            $manager->persist($order);
        }

        $manager->flush();
    }
}
