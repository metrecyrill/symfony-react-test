<?php

namespace App\Orders\Repository;

use App\Orders\Model\Order;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class OrderRepository extends ServiceEntityRepository implements OrderRepositoryInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Order::class);
    }

    /**
     * @inheritDoc
     */
    public function getAll(?string $by, ?string $query): array
    {
        $criteria = ($by && $query ) ? [$by => $query] : [];

        return parent::findBy($criteria);
    }
}