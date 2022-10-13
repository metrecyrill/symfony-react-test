<?php

namespace App\Orders\Service;

use App\Orders\Repository\OrderRepositoryInterface;

class OrderService implements OrderServiceInterface
{
    private OrderRepositoryInterface $orderRepository;

    public function __construct(OrderRepositoryInterface $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    /**
     * @inheritDoc
     */
    public function getAll(string $by, string $query): array
    {
        return $this->orderRepository->getAll($by, $query);
    }
}